import React from 'react';

export let Best = (props) => {
    const { name } = props;
    return (
        <div>
            <h1>{name} is the best</h1>
            {props.children}
        </div>
    );
}
//export default Best;
