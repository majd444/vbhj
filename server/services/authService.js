const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

const findOrCreateUser = async (profile) => {
  try {
    // Check if user exists by googleId
    let user = await User.findOne({
      where: { googleId: profile.sub },
    });

    const userData = {
      googleId: profile.sub,
      email: profile.email,
      name: profile.name,
      profilePicture: profile.picture,
      lastLogin: new Date(),
    };

    if (user) {
      // Update last login time
      await user.update(userData);
    } else {
      // Create new user
      user = await User.create(userData);
    }

    // Generate JWT token
    const token = generateToken(user);
    
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        profilePicture: user.profilePicture,
      },
      token,
    };
  } catch (error) {
    console.error('Error in findOrCreateUser:', error);
    throw new Error('Failed to authenticate user');
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password', 'googleId'] },
    });
    return user;
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw new Error('Failed to fetch user');
  }
};

module.exports = {
  findOrCreateUser,
  getUserById,
};
