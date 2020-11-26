const express = require("express");
const app = express();
 
const userAccessRecord = require("./middlewares/userAccessRecord");

app.use(userAccessRecord);

app.get("/post",(req,res)=>{
    console.log(req.body);
})
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})