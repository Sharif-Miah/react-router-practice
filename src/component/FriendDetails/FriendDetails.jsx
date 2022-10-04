import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDe = useLoaderData();
    // console.log(friendDe);
    return (
        <div>
            <h1>Friend Details Pages.</h1>
            <h2>This is about Friend Details Something.</h2>
            <h1>Person Name: {friendDe.name}</h1>
            <p>Phone: {friendDe.phone}</p>
        </div>
    );
};

export default FriendDetails;