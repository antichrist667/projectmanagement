const EventEmitter = require('events');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../db/models/usermodel');

class LoginService extends EventEmitter {
  async loginUser(email, password) {
    const user = await userModel.getUserByEmail(email);

    if (!user) {
      this.emit('loginAttempt', {
        eventType: 'LoginAttempt',
        data: {
          userId: null,
          email: email,
          success: false,
          timestamp: new Date().toISOString()
        }
      });
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      this.emit('loginAttempt', {
        eventType: 'LoginAttempt',
        data: {
          userId: user.id,
          email: email,
          success: false,
          timestamp: new Date().toISOString()
        }
      });
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    this.emit('loginAttempt', {
      eventType: 'LoginAttempt',
      data: {
        userId: user.id,
        email: email,
        success: true,
        timestamp: new Date().toISOString()
      }
    });
    return { token, user: { id: user.id, email: user.email } };
  }
}

module.exports = new LoginService();
