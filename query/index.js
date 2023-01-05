const express = require('express');
const { connectRabbit, rabbitWrapper } = require('@giantsoftnats/common');
const { connectDb } = require('./db/connectDb');
const { CommentCreatedListener } = require('./events/listeners/comment-created-listener');
const { PostCreatedListener } = require('./events/listeners/post-created-listener');
const router = require('./routes/routes');

const app = express();

app.use(express.json());
connectDb();

connectRabbit(rabbitWrapper, () => {
  new PostCreatedListener(rabbitWrapper.client).listen();
  new CommentCreatedListener(rabbitWrapper.client).listen();
});

app.use('/api/query', router)


app.listen(3000, () => {
  console.log(`App listening on port 3000`)
})