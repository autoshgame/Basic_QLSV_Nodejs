const express = require('express');
const userRouter = require('./Router/student_router');

const app = express();
app.use(userRouter);
app.use(express.json());

app.listen(4000);





