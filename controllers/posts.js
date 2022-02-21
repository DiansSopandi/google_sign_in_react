import express from 'express';

import postMessage from '../models/postMessage.js';

const router = express.Router;

export const getPosts = async ( req, res ) => {
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const createPost = async ( req, res ) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostmessage = new postMessage({ title, message, selectedFile, creator, tags });

    try {
            await newPostmessage.save();

            res.status(201).json(newPostmessage);
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}

export const updatePost = async ( req, res) => {
    const { id } = req.params;
    const { title, message, selectedFile, creator, tags} = req.body;

    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with ');

    const updatedPost = { creator, title, message, tags, selectedFile, id : _id };

    await postMessage.findByidAndUpdate(id, updatedPost, { new : true });

    res.json(updatedPost);
}

export const deletePost = async ( req, res) => {
    const { id } = req.params;

    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with ');

    await postMessage.findByidAndRemove(id);

    res.json({message : "Post delete Successfully." });
}


export const likePost = async ( req,res ) => {
    const { id } = req.params;

    if (!req.userId) return res.json({ message : "Unauthenticated" });

    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(' No Post with ');

    const post = await postMessage.find(id);

    const index = post.likes.findIndex( (id) => id === String(req.userId) );

    if (index === -1){
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter( (id) => id !== string(req.userId) );
    }

    const updatedPost =  await postMessage.findByidAndUpdate(id, post, { new : true } );

    res.json(updatedPost);
}

export default router;