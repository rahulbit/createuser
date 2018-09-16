const mongoose = require('mongoose'),
 Schema = mongoose.Schema;

const userSchema = new Schema({
    
    number :{
        type:'String',
        default:''
    },

  

    email:{
        type:"String",
        default:''
    },

    userId:{
     type:'String',
     default:'',
     unique:'true'
    }

   


})

mongoose.model('user', userSchema);