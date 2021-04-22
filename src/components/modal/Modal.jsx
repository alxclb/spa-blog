import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BlogContext } from "../../context/BlogContext";
import { getRnd } from "../../helper/helper";
import { addPost, getAllPosts, updatePost } from "../../service/service";
import { Button } from "../common/Button";
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
    const [resStatus, setResStatus] = useState("");//response status
    const [screenSize, setScreenSize] = useState({ //modal screen size
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

    //ADD POST OR EDIT POST 
    async function postData() {
        if (id) {
            let data = JSON.stringify(postContent);
            await updatePost(id, data).then((data) => setResStatus("UPDATED"));
        } else {
            let data = JSON.stringify({ ...postContent, categoryId: getRnd() }); //add random category(1-5)
            await addPost(data).then((data) => setResStatus(data.statusText));
        }
        let t = setTimeout(() =>toggle() , 3000);
        // refresh post list
        const res = await getAllPosts().then((res) => res.data);
        setPosts(res.resultData);
         return () => {
            clearTimeout(t);
        };
    }
    //CLEAR RESPONSE MESSAGE
    useEffect(() => {
        let t = setTimeout(() => setResStatus(""), 3000);
        return () => {
            clearTimeout(t);
        };
    }, [resStatus]);

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
                          <Response statusText={resStatus} />
                      </div>
                  </div>
                  <div className="modal-overlay"></div>
              </div>,
              document.body
          )
        : null;
};
