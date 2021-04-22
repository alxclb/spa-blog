import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BlogContext } from "../../context/BlogContext";
import { getRandomNumber, textValidation } from "../../helper/helper";
import { addPost, getAllPosts, updatePost } from "../../service/service";
import { Button } from "../Common/Button";
import { Controls } from "./components/Controls";
import { EditText } from "./components/EditText";
import "./modal.scss";
import { Response } from "./components/Response";

export const Modal = ({ visible, toggle, id, text, title, categoryId }) => {
    let { setPosts } = useContext(BlogContext);

    const [postContent, setPostContent] = useState({
        text: text,
        id: id,
        title: title,
        categoryId: categoryId,
    });
    const [responseStatus, setResponseStatus] = useState("");
    const [screenSize, setScreenSize] = useState({
        width: "600px",
        height: "auto",
    });

    function minWindow() {
        setScreenSize({ width: "600px", height: "auto" });
    }

    function maxWindow() {
        setScreenSize({ width: "100vw", height: "100vh" });
    }

    function editTitle(e) {
            setPostContent((prevState) => ({
                ...prevState,
                title: e.target.value,
            }));
    }

    function editText(e) {
        setPostContent((prevState) => ({
            ...prevState,
            text: e.target.value,
        }));
    }

    async function postData() {
       if(textValidation(postContent.title) && textValidation(postContent.text)){
          if (id) {
            let data = JSON.stringify(postContent);
            await updatePost(id, data).then((data) =>
                setResponseStatus("UPDATED")
            );
        } else {
            let data = JSON.stringify({
                ...postContent,
                categoryId: getRandomNumber(),
            });
            await addPost(data).then((data) =>
                setResponseStatus(data.statusText)
            );
        } 
       }else{
        setResponseStatus('Only letters and numbers');
       }
        
        let t = setTimeout(() => toggle(), 3000);

        const res = await getAllPosts().then((res) => res.data);

        setPosts(res.resultData);

        return () => {
            clearTimeout(t);
        };
    }

    useEffect(() => {
        let t = setTimeout(() => setResponseStatus(""), 3000);

        return () => {
            clearTimeout(t);
        };
    }, [responseStatus]);

    return visible
        ? ReactDOM.createPortal(
              <div className="modal">
                  <div
                      className="modal-pop"
                      style={{
                          maxWidth: screenSize.width,
                          height: screenSize.height,
                      }}
                  >
                      <nav className="modal-nav">
                          <h4>Add/Edit blog post</h4>
                          <Controls
                              minWindow={minWindow}
                              maxWindow={maxWindow}
                              closeWindow={toggle}
                          />
                      </nav>
                      <EditText
                          editTitle={editTitle}
                          editText={editText}
                          text={text}
                          title={title}
                      />
                      <div className="modal-btn">
                          <Button onClick={postData} title="Post" />
                          <Button onClick={toggle} title="Close" />
                      </div>
                      <div className="modal-res">
                          <Response statusText={responseStatus} />
                      </div>
                  </div>
                  <div className="modal-overlay"></div>
              </div>,
              document.body
          )
        : null;
};
