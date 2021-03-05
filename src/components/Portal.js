import React from 'react'
import ReactDOM from 'react-dom'
function Portal() {
    return ReactDOM.createPortal(
        <div>
            <h1>Bu rootning ichida keldi</h1>
        </div>,
        document.getElementById('root-mem')
    )
}

export default Portal
