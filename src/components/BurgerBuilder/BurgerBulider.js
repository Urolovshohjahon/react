import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function BurgerBulider(props) {
    return (
        <div style={{ witdh: '100%' }}>
            <Header price={props.price}/>
            {props.children}
            <Footer />
        </div>
    )
}

export default BurgerBulider
