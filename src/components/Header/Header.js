import React from 'react'
import './Header.css'
import HeaderMain from './HeaderMain/HeaderMain'

function Header(props) {
    return (
        <header>
            <HeaderMain price={props.price} />
        </header>
    )
}

export default Header
