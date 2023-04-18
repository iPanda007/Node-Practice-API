const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const TodoShema = new Schema({
    title : {
        type:String,
        require:true,
    },
    completed:{
        type:Boolean, 
    }
})

module.exports =mongoose.model('Todos',TodoShema)