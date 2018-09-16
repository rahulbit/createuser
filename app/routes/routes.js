const  express = require('express');
const router =   express.Router();

const controllers =  require('../controller/appcontroller');
const config =   require('../../configuration/appconfig')



module.exports.setRouter = (app) => {

    let baseUrl =`${config.apiVersion}/create`;
   

    //   route  for sending mail
    // localhost:3000/api/v1/create/createuser 
    app.post(`${baseUrl}/createuser`, controllers.createuser);

   

   

}