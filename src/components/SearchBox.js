import React from 'react';

export default function SearchBox({ onSearchTitle, searchTitle }) {
    const searchEvent = (event) => {
        event.preventDefault();
        onSearchTitle(event.target.value);
    };

    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                placeholder='Search robots by their name'
                onChange={searchEvent}
                defaultValue={searchTitle}
                type='search'
            />
        </div>
    );
}
