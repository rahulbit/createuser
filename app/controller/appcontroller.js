const express = require('express');

const shortId =  require('shortid')

const check = require('../libs/checklib');
const logger = require('../libs/loggerlib');
const response = require('../libs/responselib');
const nodeMailer = require('nodemailer');
const mongoose = require('mongoose')





const userModel = mongoose.model('user')

let createuser =(req, res)=>{
    if(check.isEmpty(req.body.email) || check.isEmpty(req.body.number))
    {
        let apiresponse = response.generate(true, 'required parameter missing', 403, null)
        res.send(apiresponse);

    }

    else {
        let newuser = new userModel({
            email:req.body.email,
            number:req.body.number,
            userId:shortId.generate()
        });

        newuser.save((err, result)=>{
            if(err)
            {
                logger.error(`error${err}`, 'database', 10)
                let apiresponse = response.generate(true, 'internal server error', 500, null)
                res.send(apiresponse);
                console.log(apiresponse);
            }
            else {
                let apiresponse = response.generate(false , 'user created succesfully', 200, result)
                res.send(apiresponse);
                console.log(apiresponse)
            }
        })
    }
}





module.exports ={
    createuser:createuser
  
}