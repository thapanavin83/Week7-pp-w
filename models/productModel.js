const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({

    productName:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    inventoryCount:{type:Number, default:0},
    supplier:{
        name:{type:String},
        contactEmail:{type:String},
        contactPhone:{type:String},
        isVerified:{type:Boolean, default:false},

    },


});

module.exports = mongoose.model("Product",productSchema);



