import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import SignUp from '../../SignUp/SignUp'
import SignIn from '../../SignIn/SignIn'
import BurgerBulider from '../../BurgerBuilder/BurgerBulider'
import Korzina from '../../Korzina/Korzina'
import gamburger from '../../../images/hambergur.jpg'
import limonad from '../../../images/limonad.jpg'
import hotdog from '../../../images/hot_dog.jpg'
import pizza from '../../../images/pitsa.jpg'
import juice from '../../../images/sharbat.jpg'
import palov from '../../../images/osh.jpg'
import ColBurger from '../../ColBurger/ColBurger'
import Main from '../../Main/Main'
function HeaderNav(props) {
    const array = [
        { type: 'gamburger', img: gamburger },
        { type: 'limonad', img: limonad },
        { type: 'hotdog', img: hotdog },
        { type: 'pizza', img: pizza },
        { type: 'juice', img: juice },
        { type: 'palov', img: palov }
    ];


    return (
        <div className='Fixed'>
            <Switch>
                <Route exact path='/' render={() =>
                    <BurgerBulider price={props.price}>
                        <Main>
                            <section>
                                <div className="container">
                                    <div className="row">

                                        <ul>
                                            <li><a href="!#" style={props.Styled2}>Гамбургеры</a></li>
                                            <li><a href="!#" style={props.Styled2}>Хот доги</a></li>
                                            <li><a href="!#" style={props.Styled2}>Пицца</a></li>
                                            <li><a href="!#" style={props.Styled2}>Напитки</a></li>
                                            <li><a href="!#" style={props.Styled2}>Соки</a></li>
                                        </ul>

                                    </div>
                                    <div className="row ">
                                        {
                                            array.map((val, key) => (
                                                <ColBurger
                                                    type={val.type}
                                                    img={val.img}
                                                    Added={() => props.Added(val.type)}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </section >
                        </Main >
                    </BurgerBulider >

                } />

                < Route path='/Korzina' render={() => <Korzina
                    order={props.order}
                    price={props.price}
                    Removed={props.Removed}
                    isNull={props.isNull}
                    orderNow={props.orderNow} />}
                />
                < Route path='/SignUp' render={() => <SignUp />} />
                < Route path='/SignIn' render={() => <SignIn />} />
            </Switch>

            <div div className="header_nav" >
                <div className="container">
                    <div className="row justify-content-between align-items-center">

                        <a href='#!' className="logo">Street88</a>

                        <ul className="menus flex-wrap align-items-center">
                            <li><NavLink to="/Korzina" className="menu" activeClassName="active">Корзина <span>{props.count}</span></NavLink></li>
                            <li><NavLink to="/" className="menu" activeClassName="active">Меню</NavLink></li>
                            <li><NavLink to='/SignIn' className="menu" activeClassName="active">LogIn</NavLink></li>
                            <li><NavLink to="/SignUp" className="menu" activeClassName="active">SignUp</NavLink></li>
                            <li>
                                <label className="switch">
                                    <input type="checkbox" onChange={props.changeBack} />
                                    <div className="slider"></div>
                                </label></li>

                        </ul>


                        <div className="second">
                            <button className="knopka" >
                                <i className="fa fa-bars" ariaHidden="true"></i>
                            </button>
                            <div className="menu2">
                                <ul className="flex-column">
                                    <li><NavLink to="/Korzina" className="menu" activeClassName="active" >Корзина<span>{props.count}</span></NavLink></li>
                                    <li><NavLink to="/BurgerBuilder" className="menu" activeClassName="active" >Меню</NavLink></li>
                                    <li><NavLink to="/SignIn" className="menu" activeClassName="active">LogIn</NavLink></li>
                                    <li><NavLink to="/SignUp" className="menu" activeClassName="active" >SignUp</NavLink></li>
                                    <li><label className="switch">
                                        <input type="checkbox" />
                                        <div className="slider"></div>
                                    </label></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </div >
    )
}
export default HeaderNav
