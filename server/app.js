const express = require('express');
const connecttomongo = require('./databases/Database');
const app = express();

//port
const port = process.env.PORT || 5000

connecttomongo();



//middleware for json req
app.use(express.json())


//Routes
app.use('/auth/',require('./routes/Student.js'))

app.get('/', (req, res) => {
  res.send('Server is live')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})