const express=require('express');
const {Router}=require('express');
const app=express();
const router=Router();
const serverless=require('serverless-http');
router.get('/',(req,res)=>{
    console.log('hello chotu created a static website',req);
    res.send('hello chotu created a static website');
});

app.use("/api/",router);
// app.listen(3000,()=>{
//     console.log('server is running on port 3000');
// });
exports.handler=serverless(app);