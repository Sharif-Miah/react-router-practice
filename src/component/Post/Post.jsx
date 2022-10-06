import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'


const Post = ({ post }) => {
    // console.log(post);
    const { id, title, body } = post;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post-border'>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>
                <button className='btn'>click Here</button>
            </Link>
            <button onClick={handleNavigate} className='btn'>Another Button</button>

        </div>
    );
};

export default Post;