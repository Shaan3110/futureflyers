const mongoose=require('mongoose');
const { Schema } = mongoose;

const studentmodel = new Schema({
  email: String,
  name: String,
  attendance: Number,
});

module.exports=mongoose.model('student',studentmodel);