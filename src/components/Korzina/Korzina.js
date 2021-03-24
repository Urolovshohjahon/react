import React from 'react'

function Korzina(props) {
    return (
        <div>
            <ul className="itemList">
                <li>Limonad - {props.order.limonad} <button
                    onClick={() => props.Removed('limonad')}
                    disabled={props.isNull.limonad}
                    className='remove'>Less</button></li>
                <li>Gamburger - {props.order.gamburger} <button
                    onClick={() => props.Removed('gamburger')}
                    disabled={props.isNull.gamburger}
                    className='remove'>Less</button></li>
                <li>Juice - {props.order.juice} <button
                    onClick={() => props.Removed('juice')}
                    disabled={props.isNull.juice}
                    className='remove'>Less</button></li>
                <li>Hot Dog - {props.order.hotdog} <button
                    onClick={() => props.Removed('hotdog')}
                    disabled={props.isNull.hotdog}
                    className='remove'>Less</button></li>
                <li>Palov - {props.order.palov} <button
                    onClick={() => props.Removed('palov')}
                    disabled={props.isNull.palov}
                    className='remove'>Less</button></li>
                <li>Pizza - {props.order.pizza} <button
                    onClick={() => props.Removed('pizza')}
                    disabled={props.isNull.pizza}
                    className='remove'>Less</button></li>
                <h2 className="allPrice">All: {props.price}$</h2>
                <button disabled={props.orderNow} className='toOrder' onClick={()=>console.log('ok')}>ORDER NOW</button>
            </ul>

        </div>
    )
}

export default Korzina
