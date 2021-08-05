require("dotenv").config();
//console.log(process.env.PORT);
const http = require("http");
const PORT = process.env.PORT || 5000;

const firstRes= function (req,res){
    res.writeHead(200);
    res.end("hey, I am Server 😄");
    
};
const server = http.createServer(firstRes);
server.listen(PORT,()=>console.log(`server is listen on port=${PORT}`));