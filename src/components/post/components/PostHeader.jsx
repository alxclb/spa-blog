import React, { useContext, useState } from "react";
import { Button } from "../../Common/Button";
import { Created } from "./Created";
import { Image } from "../../Common/Image";
import { Modal } from "../../Modal/Modal";
import { deletePost } from "../../../service/service";
import { BlogContext } from "../../../context/BlogContext";


export const PostHeader = ({post}) => {
    const {createdAt, id, text, title, categoryId} = post;

    let { posts, setPosts } = useContext(BlogContext);

    const [visible, setVisible] = useState(false);
    function toggle() {
        setVisible(!visible);
    }

    async function handleDeletePost(){
        let res = await deletePost(id).then(res=>res.status);
        if(res === 204){
            let newList = posts.filter(post=>post.id!==id)
            setPosts(newList)
        }
        console.log(res);
    }

    return (
        <div className="post-header">
            <div className="box left">
                <Image maxWidth="80" alt="avatar" />
            </div>
            <div className="box center">
                <h2>Post title: {title}</h2>
                <Created date={createdAt} />
            </div>
            <div className="box right">
                <Button title="Edit" onClick={toggle}/>
                <Button title="Delete" onClick={handleDeletePost} />
            </div>
            <Modal visible={visible} toggle={toggle} id={id} title={title} text={text} categoryId={categoryId}/>
        </div>
    );
};
