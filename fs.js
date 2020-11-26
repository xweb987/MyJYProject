const fs = require('fs');
const userAccessRecord = require("./middlewares/userAccessRecord");

//写文件
fs.writeFile('./席文博/logs',userAccessRecord,err=>{
    console.log(err);
})
module.exports = userAccessRecord;
