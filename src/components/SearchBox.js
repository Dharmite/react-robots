import React from 'react';

export default function SearchBox({ onSearchField, searchField }) {
    const searchEvent = (event) => {
        event.preventDefault();
        onSearchField(event.target.value);
    };

    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                placeholder='Search robots by their name'
                onChange={searchEvent}
                defaultValue={searchField}
                type='search'
            />
        </div>
    );
}
