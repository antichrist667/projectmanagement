const { PubSub } = require('@google-cloud/pubsub');
const AuditLog = require('../db/models/auditmodel');
const pubSubClient = new PubSub();

async function listenForMessages() {
  console.log('Starting to listen for messages...');  // Log para verificar que el servicio está escuchando

  const subscriptionName = 'auditservice-subscription';
  const subscription = pubSubClient.subscription(subscriptionName);

  const messageHandler = async message => {
    console.log('Received message:', message.data.toString()); // Verificar si el mensaje fue recibido

    try {
      const eventData = JSON.parse(message.data.toString());
      const { userId, success, timestamp } = eventData;

      console.log(`Attempting to insert log: ${JSON.stringify({ user_id: userId, success, timestamp })}`);
      await AuditLog.create({ user_id: userId, success, timestamp });  // Insertar el log en la base de datos

      console.log(`Audit log created for userId: ${userId}`);
      message.ack();  // Confirmar que el mensaje fue procesado correctamente
    } catch (error) {
      console.error('Error processing message:', error);  // Manejar errores en el procesamiento del mensaje
      message.nack();  // Si hay un error, no confirmar el mensaje para que pueda ser procesado nuevamente
    }
  };

  subscription.on('message', messageHandler);
  subscription.on('error', error => {
    console.error('Subscription error:', error);  // Manejar errores en la suscripción
  });
}

// Iniciar la escucha de mensajes
listenForMessages().catch(console.error);
