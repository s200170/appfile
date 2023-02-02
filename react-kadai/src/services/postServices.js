import axios from "axios";
const apiUrl = "http://localhost:5000";

export function getPosts() {
    return axios.get(apiUrl);
}

export function addPost(post) {
    return axios.post(apiUrl, post);
}

export function deletePost(id) {
    return axios.delete(apiUrl + "/" + id);
}