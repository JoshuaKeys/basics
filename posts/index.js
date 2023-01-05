const express = require('express');
const connectDb = require('./db/connectDb');
const router = require('./routes/posts');
const { rabbitWrapper, connectRabbit } = require('@giantsoftnats/common')
const { connect } = require('./connectRabbitMQ');
const { CommentCreatedListener } = require('./events/publishers/comment-created-listener');
const app = express();


connectDb();

connectRabbit(rabbitWrapper, () => {
  new CommentCreatedListener(rabbitWrapper.client).listen();
})

app.get('/api/posts/name', (req, res) => {
  res.send('Hello World')
})

app.use(express.json());

app.use('/api/posts',router)

app.listen(3000, () => {
  console.log(`Listening on port 3000`)
})