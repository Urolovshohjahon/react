import React from 'react'

function MemoComp(props) {
    const name = props.name
    console.log('MemoComp...')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
