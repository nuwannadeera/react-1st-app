import React from 'react';
import Button from 'react-bootstrap/Button';

function FooterContent(prpos) {

function clickMe(e) {
    console.log('hello...',e);
}

const clickMe2 = () => {
    console.log('hello222222...');
}

const clickMe4 = (z) => {
    // event object
    console.log('hello' , z);
}

    return (
        <div>
            <Button variant="primary" onClick={clickMe}>Button1</Button>
            <Button variant="primary" onClick={clickMe2}>Button2</Button>
            <Button variant="primary" onClick={(e) => {console.log('nuwan',e);}}>Button3</Button>
            <Button variant="primary" onClick={clickMe4}>Button4</Button>
        </div>
    )
}

export default FooterContent
