const express = require('express');
const {body,validationResult} = require('express-validator');
const middleware= require('../middlewares/auth-middleware')
//all module imports
const User = require('../models/Student.js');

const router = express.Router();

//register route
router.post('/user', 
  middleware,
    //checking if the email already exists on the database
    async(req,res)=>
    {
    try {
      console.log(req.details)
      // let user = await User.findOne({
      //   email: req.body.email
      // });
      // // console.log(user)
      // if (user) {
      //   return res.status(400).json({
      //     "errors": [{
      //       "value": req.body.email,
      //       "msg": "Account already exist with this email",
      //       "param": "email",
      //       "location": "body"
      //     }]
      //   });
      // }
      
      // user = await User.create({
      //   name: req.body.name,
      //   email: req.body.email,
      // })


    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        "errors": [{
          "value": "no-value",
          "msg": "Sorry for the inconvinience some internal server error occurred",
          "param": "no-param",
          "location": "server"
        }]
      });
    }
  })

  module.exports=router
