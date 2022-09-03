var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
    title:{type:String, required:true},
    content:{type:String, required:false},
    image:{type:String, required:false, unique:false},
    userId:{type:mongoose.Schema.Types.ObjectId, required:false,unique:false},
    public:{type:Boolean, default:false, required:false,unique:false},
    created_at:{type:Date, default:Date.now}
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;