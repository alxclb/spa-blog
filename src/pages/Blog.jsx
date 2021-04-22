import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Message } from "../components/container/Message";
import { Sidebar } from "../components/sidebar/Sidebar";
import { BlogPosts } from "../components/blog-posts/BlogPosts";
import { Button } from "../components/common/Button";
import { Modal } from "../components/modal/Modal";
import { BlogContext } from "../context/BlogContext";
import { getAllPosts } from "../service/service";
import { getCategories } from "../helper/helper";

export const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([null]);

    //FATCH ALL POST FOR INITIAL HOME PAGE
    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllPosts().then((res) => res.data);
            setPosts(res.resultData);
            setError(res.errorMessage);
            setCategories(() => getCategories(res.resultData)); 
        };
        fetchData();
    }, []);

    //MODAL VISIBILITY
    const [visible, setVisible] = useState(false);
    function toggle() {
        setVisible(!visible);
    }

    return (
        <div className="blog">
            <BlogContext.Provider value={{ posts, setPosts }}>
                <Layout>
                    <h1>Welcome to My Blog</h1>
                    <Message />
                    <Modal visible={visible} toggle={toggle} />
                    <Button
                        onClick={toggle}
                        className="add-post"
                        title="Add post"
                    />
                    <div className="flex-section">
                        <Sidebar categories={categories} />
                        <BlogPosts posts={posts} error={error} />
                    </div>
                </Layout>
            </BlogContext.Provider>
        </div>
    );
};
