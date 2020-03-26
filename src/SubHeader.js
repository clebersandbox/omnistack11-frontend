import React from 'react';

export default function SubHeader(props) {
    return (
        <h2>
            { props.title } { props.children}
        </h2>
    )
}