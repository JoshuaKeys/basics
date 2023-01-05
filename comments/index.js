const express = require('express');
const { connectDb } = require('./db/connectDb');
const router = require('./routes/comments');
const { connectRabbit, rabbitWrapper } = require('@giantsoftnats/common');

const app = express();

connectRabbit(rabbitWrapper, () => {});
connectDb();

app.use(express.json());

app.use('/api/comments/', router);

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
})