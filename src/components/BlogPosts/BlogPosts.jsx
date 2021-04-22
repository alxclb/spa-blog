import React from "react";
import { Post } from "../Post/Post";
import "./blog-posts.scss";
import { NoPosts } from "./components/NoPosts";

export const BlogPosts = ({ posts }) => {
    return (
        <section className="blog-posts">
            <ul>
                {posts.length > 0 ? (
                    posts.map((post) => <Post key={post?.id} post={post} />)
                ) : (
                    <NoPosts />
                )}
            </ul>
        </section>
    );
};
