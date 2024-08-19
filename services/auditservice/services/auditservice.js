const { PubSub } = require('@google-cloud/pubsub');
const AuditLog = require('../db/models/auditmodel');
const pubSubClient = new PubSub();

async function listenForMessages() {
  const subscriptionName = 'auditservice-subscription';
  const subscription = pubSubClient.subscription(subscriptionName);

  const messageHandler = async message => {
    try {
      const eventData = JSON.parse(message.data.toString());
      const { userId, success, timestamp, email } = eventData;

      await AuditLog.create({ user_id: userId, success, timestamp, email });
      message.ack();
    } catch (error) {
      message.nack();
    }
  };

  subscription.on('message', messageHandler);
  subscription.on('error', error => {});
}

module.exports = { listenForMessages };
