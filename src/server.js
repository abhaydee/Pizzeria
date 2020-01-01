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

app.listen(5000,()=>{
    console.log("server running on 5000")
})