import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function HomeContent(props) {
    return (
        <>
            <Nav.Link as={Link} to={props.url}>{props.linkname}</Nav.Link>
            {/* <Link to={props.url}>{props.linkname}</Link> */}
        </>
    )
}

export default HomeContent