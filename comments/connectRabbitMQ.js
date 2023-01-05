const amqp = require("amqplib");

let attempts = 0;
const connect =  async () => {
  try {
    await amqp.connect("amqp://rabbitmq-srv");
    console.log(`Connected to RabbitMQ after ${attempts} attempts`)
  } catch(error) {
    if(attempts < 10) {
      attempts++;
      setTimeout(connect, 3000)
    }else {
      throw new Error('Unable to connect to RabbitMQ')
    }
  }
}
exports.connect = connect;