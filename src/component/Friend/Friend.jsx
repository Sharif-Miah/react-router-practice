import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='userName'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <h5>User: <Link to={`/friend/${id}`}>{username}</Link></h5>
        </div>
    );
};

export default Friend;