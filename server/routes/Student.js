const express = require('express');
const {body,validationResult} = require('express-validator');

//all module imports
const User = require('../models/Student.js');

const router = express.Router();

//register route
router.post('/register',

  //this will return invalid email and password in case of not valid formats which we got with the package express-validator
  [
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isLength({
      min: 8
    })
  ],


  //validating the email and password 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }


    //checking if the email already exists on the database
    try {
      let user = await User.findOne({
        email: req.body.email
      });
      // console.log(user)
      if (user) {
        return res.status(400).json({
          "errors": [{
            "value": req.body.email,
            "msg": "Account already exist with this email",
            "param": "email",
            "location": "body"
          }]
        });
      }
      
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
      })


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
