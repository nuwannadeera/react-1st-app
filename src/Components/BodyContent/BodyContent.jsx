import React from 'react';

function BodyContent(prpos) {
function clickMe() {
    console.log('hello...');
}

    return (
        <div>
            {prpos.children}
        </div>
    )
}

export default BodyContent