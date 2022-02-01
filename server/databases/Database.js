const mongoose=require('mongoose');

//connection
const connectaccount = () =>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("connection successful");
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports=connectaccount;