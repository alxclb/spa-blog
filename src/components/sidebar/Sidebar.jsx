import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { getByCategory } from "../../service/service";
import "./sidebar.scss";

export const Sidebar = ({ categories }) => {
    let { setPosts } = useContext(BlogContext);

    async function updateListByCategory(e) {
        e.preventDefault();
        const id = Number(e.target.getAttribute("data-cat"));
        await getByCategory(id)
            .then((res) => res.data.resultData)
            .then((posts) => setPosts(posts));
    }

    return (
        <section className="sidebar">
            <h2>Blog categories</h2>
            <ul>
                {categories.length > 0 ? (
                    categories.map((cat) => (
                        <li key={cat} onClick={updateListByCategory}>
                            <a href="www" data-cat={cat}>
                                Category {cat}
                            </a>
                        </li>
                    ))
                ) : (
                    <li>
                        <h3>No categories</h3>
                    </li>
                )}
            </ul>
        </section>
    );
};
