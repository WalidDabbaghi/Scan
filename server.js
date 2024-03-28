console.clear();
// imporing express 
const express =require("express");
// imporing cors li y5lini njem naaml call api 
const cors=require('cors'); 
// initalitaion 
const app = express();
// importing database 
const connectDB=require("./config/dbConnect");
// importing dotenv
require("dotenv").config();
// connect db 
connectDB(); 
// convert json:middleware
app.use(express.json());
// cors
app.use(cors());
//ROUTE 
app.use("/user", require("./routes/user"));
// server 
const PORT = process.env.PORT ;
app.listen(PORT, (err) =>
err ? console.log(err) : console.log(`server running on ${PORT}`));