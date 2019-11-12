const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const csv = require('csv-parser')
const fs = require('fs')
const multer= require('multer')
 var upload=multer({dest:'uploads/'})
var results=[];
 app.post('/file' , upload.single('mydata'), (req, res)=>{
    var file=req.file;  
     fs.createReadStream(file.path).pipe(csv()).on('data', (data) => results.push(data))
        .on('end', () => {
        // console.log(results);
        res.json({data:results})
  });
    
})
async function handleDate(data, res){
    try{
        await result.push(data)
        res.json({data:result})
    }
    catch(err){
        console.log(err)
    }
}
app.listen(1234, (req, res)=>{
    console.log("serer start on 1234")
})