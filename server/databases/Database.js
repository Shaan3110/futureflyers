const mongoose=require('mongoose');


//database address
const dbaddress='mongodb+srv://futureflyers:futureflyers@cluster0.wcvzk.mongodb.net/Futureflyers?retryWrites=true&w=majority';

//connection
const connectaccount = () =>{
    mongoose.connect(dbaddress).then(()=>{
        console.log("connection successful");
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports=connectaccount;