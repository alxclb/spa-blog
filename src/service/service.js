import API, { header } from "./api";
const BLOG_POSTS = "/api/BlogPosts",
      POST_BY_CATEGORY = "/api/BlogPosts/GetPostByCategory?categoryId=",
      SEARCH = "/api/BlogPosts/Search/?term=";

//get all posts
async function getAllPosts() {
    try {
        const res = await API.get(BLOG_POSTS, header);
        return res;
    } catch (error) {
        if (error.response) {
            return error.response; // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request; // client never received a response, or request never left
        } else {
            return error; // anything else
        }
    }
}

//get single user for user list and user_card
async function addPost(post) {
    try {
        const response = await API.post(BLOG_POSTS, post, {headers:{
            "Content-Type" : "application/json-patch+json",
        }});
        return response;
    } catch (error) {
        console.error(error);
    }
}
//get all repos for single user
async function getPost(id) {
    try {
        const response = await API.get(BLOG_POSTS + "/" + id, header);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response; // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request; // client never received a response, or request never left
        } else {
            return error; // anything else
        }
    }
}
async function changePost(id, postUpdate) {
    try {
        const response = await API.patch(BLOG_POSTS + "/" + id, postUpdate, {headers:{
            "Accept": "*/*",
            "Content-Type" : "application/json-patch+json",
        }});
        return response;
    } catch (error) {
        if (error.response) {
            return error.response; // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request; // client never received a response, or request never left
        } else {
            return error; // anything else
        }
    }
}
async function updatePost(id, postUpdate) {
    try {
        const response = await API.put(BLOG_POSTS + "/" + id, postUpdate, {headers:{
            "accept": "*/*",
            "Content-Type" : "application/json-patch+json",
        }});
        return response;
    } catch (error) {
        if (error.response) {
            return error.response; // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request; // client never received a response, or request never left
        } else {
            return error; // anything else
        }
    }
}
async function deletePost(id, postUpdate) {
    try {
        const response = await API.delete(BLOG_POSTS + "/" + id, header);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response; // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request; // client never received a response, or request never left
        } else {
            return error; // anything else
        }
    }
}

async function getByCategory(categoryId) {
    try {
        const response = await API.get(POST_BY_CATEGORY + categoryId, header);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response; // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request; // client never received a response, or request never left
        } else {
            return error; // anything else
        }
    }
}

async function searchPost(text) {
    try {
        const response = await API.get(SEARCH + text, header);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response; // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request; // client never received a response, or request never left
        } else {
            return error; // anything else
        }
    }
}





export { getAllPosts, addPost, getPost, changePost, updatePost, deletePost, getByCategory, searchPost };
