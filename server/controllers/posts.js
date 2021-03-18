import PostMsg from '../models/posting.js';
import PostMessage from '../models/posting.js'


export const getPosts = async (request, response) => {
    try {
        const postMsgs = await PostMsg.find();
        console.log(postMsgs);
        response.status(200).json(postMsgs);
    } catch (error) {
        response.status(404).json({message: error.message });
    }

}


export const createPost = async (request, response) => {
    const post = req.body;

    const currentPost = new PostMsg(post);

    try {
        await newPost.save();
        response.status(201).json(currentPost);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}