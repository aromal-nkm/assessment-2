const express = require("express");


const app = express();
var PORT = 3000;
app.use(express.json());
const blogModel=require('../CodingChallenge_Blog/model');
require('./connection')

// GET OPERATION
app.get('/',async(req,res)=>{
  try {
    const blog=await blogModel.find();
    res.status(200).send(blog);
    
  } catch (error) {
    res.status(404).send('data not found')
    
  }
})
// post
app.post('/blogs',async (req,res)=>{
  try {
      var item=req.body;
      const data1=new blogModel(item);
      const saveddata=await data1.save();
      res.status(200).send('post successful')
  } catch (error) {
      res.status(404) .send('post unsuccessful')
  }
})
// put
app.put('/edit/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const data=await blogModel.findByIdAndUpdate(id,req.body)
    res.status(200).send('upadate successful')
  } catch (error) {
    res.status(404).send('upadate unsuccessful')
  }
})

//delete
app.delete('/delete/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const data=await blogModel.findByIdAndDelete(id)
    res.status(200).send('delete successful')
  } catch (error) {
    res.status(404).send('delete unsuccessful')
  }
})



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
