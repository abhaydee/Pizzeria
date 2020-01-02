const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
app.use(cors());
app.use(bodyparser.json())
const mongodb=require('mongodb').MongoClient;
const url="mongodb://localhost:27017"

mongodb.connect(url,function(err,client){
    if(err){
        console.log("cannot connect")
    }
    else{
        db=client.db('simulation')
    }
})

app.get("/getpizza",function(req,res){
    db.collection('pizza').find().toArray(
        function(err,response){
            if(err){
                console.log("cannot get pizza")
            }
            else{
                res.json(response)
           
            }
        }
    )
})

app.get("/geting",function(req,res){
    db.collection('ing').find().toArray(
        function(err,response){
            if(err){
                console.log("could not get ingredients")
            }
            else
            {   
                res.json(response)
      
            }
        }
    )
})

app.post("/postpizza",function(req,res){
    db.collection('temppizza').insertOne(req.body,function(err,response){
        if(err){
            console.log("cannot add to temppizza")
        }
        else{
            res.json(response)
            console.log(response)
        }
    })
})
app.get("/getdata",function(req,res){
    db.collection('temppizza').find().toArray(
        function(err,response){
            if(err){
                console.log(err)
            }
            else{
                res.json(response)
                
            }
        }
    )
})
app.listen(5000,()=>{
    console.log("server running on 5000")
})