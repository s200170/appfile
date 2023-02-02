const posts = require("./routes/posts");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(cors());
app.use(posts);

const port = 5000;
const DB = "mongodb://localhost/AppPosts";
mongoose.connect(DB);
app.listen(port);