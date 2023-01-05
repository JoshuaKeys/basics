let attempts = 0;
async function connect(natsWrapper, clusterId, clientId, natsUrl) {
  try {
    await natsWrapper.connect(clusterId, clientId, natsUrl);
    console.log(`Connected to Nats after ${attempts} attempts`)
  } catch(error) {
    if(attempts < 10) {
      attempts++;
      setTimeout(connect, 1000)
    }else {
      throw new Error('Unable to connect to NATS')
    }
  }
}
module.exports = async () => {
  await connect();
}