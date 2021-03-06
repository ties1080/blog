import React, {useEffect, useState} from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentListe from "./CommentListe";

export default () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
        console.log("\nResponse ===>>> ", res.data)
    }

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card"
                style={{width:'30%', marginBottom:'20px'}}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentListe comments={post.comments}/>
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Posts</h1>
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {renderedPosts}
            </div>
        </div>
    );
}
