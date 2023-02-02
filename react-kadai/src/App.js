import React from "react";
import Posts from "./Posts";
import { Paper, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./App.css";

class App extends Posts {
    state = { posts: [], currentPost: "" };
    render() {
        const { posts } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={3} className="container">
                    <div className="heading">React App</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentPost}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add post
                        </Button>
                    </form>
                    <div>
                        {posts.map((post) => (
                            <Paper
                                key={post._id}
                                className="flex task_container"
                            >
                                <div
                                    className={
                                        post.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {post.post}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(post._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;
