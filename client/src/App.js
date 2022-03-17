import React from "react";
import PostCreate from "./PostCreate";
import PostListe from "./PostListe";


export default () => {
    return (
        <div className="container">
            <h1>Blog app</h1>
            <br/>
            <PostCreate />
            <hr/>
            <PostListe/>
        </div>
    );
};
