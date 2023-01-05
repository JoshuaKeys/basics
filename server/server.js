const express = require('express');
// const { connectNats, natsWrapper } = require('@giantsoftnats/common');
const { connectRabbit, rabbitWrapper } = require('@giantsoftnats/common');
const { CommentCreatedListener } = require('./events/example-listener');

const app = express();


connectRabbit(rabbitWrapper, () => {
  new CommentCreatedListener(rabbitWrapper.client).listen();
});

app.get('/', (req, res) => {
  res.send("Hello Worlds");
});

app.listen(3000, () => {
  console.log(`App running at port 3000`)
});