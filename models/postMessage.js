import  Mongoose  from 'mongoose';

const postSchema = Mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    likes : {
        type : [String],
        default : []
    },
    createdAt : {
        type : Date,
        default : new Date
    }
});

var PostMessage = Mongoose.model('PostMessage', postSchema);

export default PostMessage;