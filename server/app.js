const express = require('express');
const http = require('http');
const cors = require("cors");
const connecttomongo = require('./databases/Database');
const app = express();
const authMiddleware = require("./middlewares/auth-middleware");

//port
const port = process.env.PORT || 5000

connecttomongo();




//middleware for json req
app.use(express.json())

//middleware for cors
app.use(cors());


app.use("/", authMiddleware);
//Routes
app.use('/auth/',require('./routes/Student.js'))

app.get('/', (req, res) => {
  res.send('Server is live')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})