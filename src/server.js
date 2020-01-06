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

app.post("/deletingdata",function(req,res){
    console.log("the body1",req.body.id)
    db.collection('temppizza').deleteOne({id:req.body.id},
        function(err,response){
            if(err){
                console.log(err)
            }
            else
            {
                res.json(response)
               
            }
        }
    )
})

app.post("/sendcustom",function(req,res){
    db.collection('custom').insert(req.body,function(err,response){
        if(err){
           throw(err)
        }
        
        res.json(response);
        console.log(response)
        
    })
})
app.get("/getcusdata",function(req,res){
    db.collection('custom').find().toArray(
        function(err,response){
            if(err){
                console.log(err)
            }
            else
            {
                res.json(response)
            }
        }
    )
})
app.post("/deletecustomdata",function(req,res){
    console.log("cusid",req.body.cusid)
    db.collection('custom').deleteOne({cusid:req.body.myid},function(err,response){
        if(err)
        {
            console.log("could not delete custom data")
        }
        else
        {   console.log(response)
            res.json(response)
        }
    })
})
app.listen(5000,()=>{
    console.log("server running on 5000")
})