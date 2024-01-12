import React from 'react';
import Nav from 'react-bootstrap/Nav';

function HomeContent(props) {
    return (
        <>
            <Nav.Link href={props.url}>{props.linkname}</Nav.Link>
        </>
    )
}

export default HomeContent