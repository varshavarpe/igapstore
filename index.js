var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var multer = require("multer");
const jwt = require("jsonwebtoken")



var app = express();

app.use(body_parser.json({limit:'50mb'}));
app.use(body_parser.urlencoded({limit:'50mb', extended: true}));

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {

        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();

});

app.get("/", (req,res)=>{
    res.send("Welcome to NodeJS");
    res.end();
})
app.use("/superadmin/igapproduct" , require("./routes/igapproduct"))

app.use("/superadmin/state",require("./routes/states"))

app.use("/superadmin/district",require("./routes/district"))

app.use("/superadmin/taluka",require("./routes/taluka"))

app.use("/superadmin/city",require("./routes/city"))

const  PORT = process.env.PORT || 8081;

const createtoken = async()=>{
  const token = await  jwt.sign({_id:"1234567"},"varshavarpesangitakamblesamikshaparmaj",
  {expiresIn:"2 seconds"})
  console.log(token);
  const userver = await jwt.verify(token,"varshavarpesangitakamblesamikshaparmaj");
  console.log(userver)
}
createtoken()

app.listen(PORT,function(){
    console.log("website is running...");
})