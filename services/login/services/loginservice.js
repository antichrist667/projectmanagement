const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../db/models/usermodel');
const { PubSub } = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();

class LoginService {
  async loginUser(email, password) {
    const user = await userModel.getUserByEmail(email);

    if (!user) {
      await this.publishLoginAttempt({
        userId: null,
        email: email,
        success: false,
        timestamp: new Date().toISOString()
      });
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      await this.publishLoginAttempt({
        userId: user.id,
        email: email,
        success: false,
        timestamp: new Date().toISOString()
      });
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });

    await this.publishLoginAttempt({
      userId: user.id,
      email: email,
      success: true,
      timestamp: new Date().toISOString()
    });

    return { token, user: { id: user.id, email: user.email } };
  }

  async publishLoginAttempt(eventData) {
    const dataBuffer = Buffer.from(JSON.stringify(eventData));
    try {
      await pubSubClient.topic('login-attempts').publish(dataBuffer);
      console.log('Login attempt event published.');
    } catch (error) {
      console.error('Error publishing login attempt event:', error);
    }
  }
}

module.exports = new LoginService();
