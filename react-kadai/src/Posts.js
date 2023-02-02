import { Component } from "react";
import { getPosts, addPost, deletePost, } from "./services/postServices";

class Posts extends Component {

    state = { posts: [], currentPost: "" };

    async componentDidMount() {
        try {
            const { data } = await getPosts();
            this.setState({ posts: data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentPost: input.value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const Posts = this.state.posts;
        try {
            const { data } = await addPost({ post: this.state.currentPost });
            const posts = Posts;
            posts.push(data);
            this.setState({ posts, currentPost: "" });
        } catch (error) {
            console.log(error);
        }
    };
    handleDelete = async (currentPost) => {
        const Posts = this.state.posts;
        try {
            const posts = Posts.filter(
                (post) => post._id !== currentPost
            );
            this.setState({ posts });
            await deletePost(currentPost);
        } catch (error) {
            this.setState({ posts: Posts });
            console.log(error);
        }
    };

}

export default Posts;
