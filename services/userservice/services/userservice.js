
const User = require('../db/models/usermodel');

const UserService = {
  createUser: async (userData) => {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllUsers: async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getUserById: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateUserById: async (id, userData) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('User not found');
      await user.update(userData);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteUserById: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('User not found');
      await user.destroy();
      return;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = UserService;
