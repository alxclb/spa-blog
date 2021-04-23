import API, { header } from "./api";
const BLOG_POSTS = "/api/BlogPosts",
    POST_BY_CATEGORY = "/api/BlogPosts/GetPostByCategory?categoryId=",
    SEARCH = "/api/BlogPosts/Search/?term=";

async function getAllPosts() {
    try {
        const res = await API.get(BLOG_POSTS, header);
        return res;
    } catch (error) {
        return error;
    }
}

async function addPost(post) {
    try {
        const response = await API.post(BLOG_POSTS, post, {
            headers: {
                "Content-Type": "application/json-patch+json",
            },
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getPost(id) {
    try {
        const response = await API.get(BLOG_POSTS + "/" + id, header);
        return response;
    } catch (error) {
        return error;
    }
}

async function updatePost(id, postUpdate) {
    try {
        const response = await API.put(BLOG_POSTS + "/" + id, postUpdate, {
            headers: {
                accept: "*/*",
                "Content-Type": "application/json-patch+json",
            },
        });
        return response;
    } catch (error) {
        return error;
    }
}
async function deletePost(id) {
    try {
        const response = await API.delete(BLOG_POSTS + "/" + id, header);
        return response;
    } catch (error) {
        return error;
    }
}

async function getByCategory(categoryId) {
    try {
        const response = await API.get(POST_BY_CATEGORY + categoryId, header);
        return response;
    } catch (error) {
        return error;
    }
}

async function searchPost(text) {
    try {
        const response = await API.get(SEARCH + text, header);
        return response;
    } catch (error) {
        return error;
    }
}

export {
    getAllPosts,
    addPost,
    getPost,
    updatePost,
    deletePost,
    getByCategory,
    searchPost,
};
