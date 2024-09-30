const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://aromal:aromal2002@cluster0.q7mal.mongodb.net/BlogData?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connection established')
}).catch(()=>{
    console.log('error in connection')
})
