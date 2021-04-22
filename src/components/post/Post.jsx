import React from "react";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { PostImages } from "./components/PostImages";
import "./post.scss";

export const Post = ({ post }) => {
    const { text } = post;
    return (
        <li className="post">
            <PostHeader post={post} />
            <PostContent content={text} />
            <PostImages />
        </li>
    );
};
