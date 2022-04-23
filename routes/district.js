var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var District = require("../models/District");
const router = express.Router();


router.post("/save",async(req,res)=>{
    let body = req.body;
    let district = new District.District();
    district.id = body.data.id;
    district.name = body.data.name;
    district.stateid = body.data.stateid;


    district.save().then(result=>{
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
    let district = new District.District();
    district.id = body.data.id;
    
    district.get().then(result=>{
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
    let district = new District.District();
    // igaproduct.user_id = body.data.user_id;
    
    district.list().then(result=>{
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
    let district = new District.District();
    district.id = body.data.id;

    district.delete().then(result=>{
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
