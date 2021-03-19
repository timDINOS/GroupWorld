import PostMsg from '../models/posting.js';

import express from 'express';


const router = express.Router();

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
    const {title, message, selectedFile, creator, tags} = request.body;

    const currentPost = new PostMsg({title, message, selectedFile, creator, tags});

    try {
        await currentPost.save();
        response.status(201).json(currentPost);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}