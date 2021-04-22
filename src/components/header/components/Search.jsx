import React, { useContext, useRef } from "react";
import { searchPost } from "../../../service/service";
import { BlogContext } from './../../../context/BlogContext';

export const Search = () => {
    let { setPosts } = useContext(BlogContext);

    const inputText = useRef("");

    //UPDATE LIST WITH SEARCH
    async function handleSubmit(e) {
        e.preventDefault();
        let res = await searchPost(inputText.current.value).then(
            (res) => res.data.resultData
        );
        setPosts(res); //update list
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search" ref={inputText} />
            </form>
        </div>
    );
};
