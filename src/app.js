const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/abhi")
.then( ()=> console.log("connection successful"))
.catch((err)=>console.log(err));
//schema
const playlistschema =new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        ctype:String,
        videos:Number,
        author:String,
        active:Boolean,
        date: {
            type:Date,
            default:Date.now
        }        
})
//crud
const Playlist =new mongoose.model("Playlist",playlistschema);
//insertdocument
const createDocument =async()=>{
    try{
        const reactPlaylist= new Playlist({
            name:"javascript",
            ctype:"frontend",
            videos:5,
            author:"abhishek",
            active:true
        })
        const result =await reactPlaylist.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
createDocument();