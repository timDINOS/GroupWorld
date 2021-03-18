import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String, 
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    numLikes: {
        type: Number,
        default: 0
    },
    postedAt: {
        type: Date,
        default: new Date()
    },
});

const PostMsg = mongoose.model('PostMessage', postSchema);

export default PostMsg;