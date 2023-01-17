import React from 'react';

export default function Card({ name, id, email, username }) {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt={name} />
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
}
