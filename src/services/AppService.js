import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/posts';

export const listPosts = () => axios.get(REST_API_BASE_URL);

export const createPost = (post) => axios.post(REST_API_BASE_URL, post)

export const getPost = (postId) => axios.get(REST_API_BASE_URL + '/' + postId)

export const updatePost = (postId, updatedPost) => axios.put(REST_API_BASE_URL + '/' + postId, updatedPost)

export const deletePost = (postId) => axios.delete(REST_API_BASE_URL + '/' + postId)