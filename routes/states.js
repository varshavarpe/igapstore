var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var States = require("../models/States");
const router = express.Router();


router.post("/save",async(req,res)=>{
    let body = req.body;
    let state = new States.States();
    state.id = body.data.id;
    state.name = body.data.name;

    state.save().then(result=>{
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
    let state = new States.States();
    state.id = body.data.id;
    
    state.get().then(result=>{
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
    let state = new States.States();
    // igaproduct.user_id = body.data.user_id;
    
    state.list().then(result=>{
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
    let state = new States.States();
    state.id = body.data.id;

    state.delete().then(result=>{
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
