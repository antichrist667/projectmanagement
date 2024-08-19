const { PubSub } = require('@google-cloud/pubsub');
const AuditLog = require('../db/models/auditmodel');
const pubSubClient = new PubSub();

async function listenForMessages() {
  const subscriptionName = 'auditservice-subscription';
  const subscription = pubSubClient.subscription(subscriptionName);

  const messageHandler = async message => {
    console.log('Received message:', message.data.toString()); // Log para confirmar recepción del mensaje

    try {
      const eventData = JSON.parse(message.data.toString());
      const { userId, success, timestamp } = eventData;

      console.log(`Attempting to insert log: ${JSON.stringify({ user_id: userId, success, timestamp })}`);
      await AuditLog.create({ user_id: userId, success, timestamp });

      console.log(`Audit log created for userId: ${userId}`);
      message.ack(); 
    } catch (error) {
      console.error('Error processing message:', error);
      message.nack(); 
    }
  };

  subscription.on('message', messageHandler);
  subscription.on('error', error => {
    console.error('Subscription error:', error);
  });
}

listenForMessages().catch(console.error);
