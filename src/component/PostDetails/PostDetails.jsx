import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { title, body } = post;
    return (
        <div>
            <h1>Hello Post Details page.</h1>
            <h3>{title}</h3>
            <p ><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;