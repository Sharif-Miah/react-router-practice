import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);

    return (
        <div>
            <h1>This is about Post Page{posts.length}</h1>
            <div className='posts-grid'>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;