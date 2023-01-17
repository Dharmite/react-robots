import React from 'react';

export default function Scroll({ children }) {
    return (
        <div
            style={{
                overflowY: 'scroll',
                height: '650px',
            }}
        >
            {children}
        </div>
    );
}
