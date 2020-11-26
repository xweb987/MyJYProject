const querystring = require("querystring");
const fs = require('fs');
const userAccessRecord = (req,res,next)=>{
    console.log("IP地址是："+req.ip);
    console.log("访问地址是："+req.path);
    console.log("访问方式是："+req.method);
    console.log("使用的浏览器是："+req.headers['user-agent']);
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let s = time.getUTCSeconds();
    let add = req.url;
    let ip = req.ip;
    let method = req.method;
    let bvs = req.headers['user-agent']
    fs.appendFile(`./${year}${month}${day}.log`, 
    `访问时间——${year}-${month}-${day} ${hours}:${mins}:${s}
    ——访问地址${add}——访问ip${ip}——访问请求方式${method}
    ——浏览器版本信息${bvs}`, (err) => {
        // console.log(err)
        next();
    })
}
module.exports = userAccessRecord;
