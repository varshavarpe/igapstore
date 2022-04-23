var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var Taluka = require("../models/Taluka");
const router = express.Router();


router.post("/save",async(req,res)=>{
    let body = req.body;
    let taluka = new Taluka.Taluka();
    taluka.id = body.data.id;
    taluka.name = body.data.name;
    taluka.districtid = body.data.districtid;


    taluka.save().then(result=>{
        console.log("Result");
        console.log(result);
        let data ={
            "status":"fail"
        }
        if(result.length !=0){
            data = {
                "status" : "success"
                 }
        }
        res.end(JSON.stringify(data));
    },
    err=>{
        console.log("Error : " + err);
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data));
    })
})
router.post("/get",(req,res)=>{
    let body = req.body;
    let taluka = new Taluka.Taluka();
    taluka.id = body.data.id;
    
    taluka.get().then(result=>{
        console.log("Result");
        console.log(result);
        let data ={
            "status":"fail"
        }
        if(result.length !=0){
            data ={
                data: result
            }            
        }
        res.end(JSON.stringify(data));
    },
    err=>{
        console.log("Error : " + err);
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data));
    });
    
});
router.post("/list",(req,res)=>{
    let body = req.body;
    let taluka = new Taluka.Taluka();
    // igaproduct.user_id = body.data.user_id;
    
    taluka.list().then(result=>{
        console.log("Result");
        console.log(result);
        let data ={
            "status":"fail"
        }
        if(result.length !=0){
            data = {
                "status" : "success",
                "data" : result
                 }
        }
        res.end(JSON.stringify(data));
    },
    err=>{
        console.log("Error : " + err);
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data));
    });
});
router.post("/delete",(req,res)=>{
    let body = req.body;
    let taluka = new Taluka.Taluka();
    taluka.id = body.data.id;

    taluka.delete().then(result=>{
        console.log("Result")
        console.log(result);
        let data ={
            "status":"fail"
        }
        if(result.length !=0){
            data = {
                "status" : "success"
                 }
        }
        res.end(JSON.stringify(data));
    },
    err=>{
        console.log("Error : " + err);
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data));
    });
});



module.exports=router
