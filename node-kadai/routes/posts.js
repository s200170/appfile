const Post = require("../models/post");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.send(post);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.send(post);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
