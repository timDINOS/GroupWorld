import PostMsg from '../models/posting.js';

import express from 'express';
import mongoose from 'mongoose';


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

export const updatePost = async (request, response) => {
    const { id: _id } = request.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return response.status(404).send('No post with id');
    }
    const updatedPost = await PostMsg.findByIdAndUpdate(_id, post,  {new: true});

    response.json(updatedPost);
}

