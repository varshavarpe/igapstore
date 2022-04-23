var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var City = require("../models/City");
const router = express.Router();


router.post("/save",async(req,res)=>{
    let body = req.body;
    let city = new City.City();
    city.id = body.data.id;
    city.name = body.data.name;
    city.stateid = body.data.stateid;


    city.save().then(result=>{
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
    let city = new City.City();
    city.id = body.data.id;
    
    city.get().then(result=>{
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
    let city = new City.City();
    // igaproduct.user_id = body.data.user_id;
    
    city.list().then(result=>{
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
    let city = new City.City();
    city.id = body.data.id;

    city.delete().then(result=>{
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
