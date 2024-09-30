const mongoose=require("mongoose");
const schema = mongoose.Schema({
       Title:String,
       Content:String,
       Author:String,
    year:Number
});
const blogData=mongoose.model('blog',schema);
module.exports=blogData


//Write missing code here
