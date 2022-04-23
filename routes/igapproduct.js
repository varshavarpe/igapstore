var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var Igapprduct = require("../models/Igapproduct");
const router = express.Router();

router.post("/save",async(req,res)=>{
    let body = req.body;
    let igaproduct = new Igapprduct.Igapprduct();
    igaproduct.id = body.data.id;
    igaproduct.name = body.data.name;
    igaproduct.picpath = body.data.picpath;

    igaproduct.save().then(result=>{
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
    let igaproduct = new Igapprduct.Igapprduct();
    igaproduct.id = body.data.id;
    
    igaproduct.get().then(result=>{
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
    let igaproduct = new Igapprduct.Igapprduct();
    // igaproduct.user_id = body.data.user_id;
    
    igaproduct.list().then(result=>{
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
    let igaproduct = new Igapprduct.Igapprduct();
    igaproduct.id = body.data.id;

    igaproduct.delete().then(result=>{
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
