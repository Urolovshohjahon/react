import React, { Component } from 'react';
import './components/Header/Header.css';
import './components/Header/AOS.css';
import './fonts/font-awesome.min.css';
import AOS from 'aos';
import { BrowserRouter } from 'react-router-dom';
import HeaderNav from './components/Header/HeaderNav/HeaderNav';

export class App extends Component {

  constructor(props) {
    super(props)
    this.changed = this.changed.bind(this)
    this.Removed = this.Removed.bind(this)
    this.Added = this.Added.bind(this)
    this.state = {
      bg: false,
      count: 0,
      price: 0,
      order: {
        gamburger: 0,
        limonad: 0,
        palov: 0,
        hotdog: 0,
        juice: 0,
        pizza: 0
      },
      isNull: {
        limonad: true,
        gamburger: true,
        juice: true,
        hotdog: true,
        palov: true,
        pizza: true
      },
      orderNow: true
    }

  }
  changed = () => {
    this.setState({ bg: !this.state.bg })
  }
  Added = (type) => {
    this.setState((prev) => ({ count: prev.count + 1 }))
    this.setState((prev) => ({ price: prev.price + 1.45 }))
    console.log(this.state.price)
    let items = {
      ...this.state.order
    }
    items[type] = this.state.order[type] + 1;
    this.setState({ order: items })
    if (items[type] > 0) {
      let buttonItems = {
        ...this.state.isNull
      }
      buttonItems[type] = false
      this.setState({
        isNull: buttonItems
      })
    }
    const isNulls = ['gamburger', 'limonad', 'palov', 'hotdog', 'juice', 'pizza']
    let counter = 0
    for (let key in isNulls) {
      if (this.state.isNull[isNulls[key]]) {
        counter++
        console.log(isNulls[key])
      }
    }
    let newOrderNow = this.state.orderNow
    if (counter === isNulls.length) {
      newOrderNow = true
      this.setState({ orderNow: newOrderNow })
    }
    else {
      newOrderNow = false
      this.setState({ orderNow: newOrderNow })
    }
  }
  Removed = (type) => {
    this.setState((prev) => ({ count: prev.count - 1 }))
    this.setState((prev) => ({ price: prev.price - 1.45 }))
    console.log(this.state.price)
    let items = {
      ...this.state.order
    }
    items[type] = this.state.order[type] - 1;
    this.setState({ order: items })
    if (items[type] === 0) {
      let buttonItems = {
        ...this.state.isNull
      }
      buttonItems[type] = true
      this.setState({
        isNull: buttonItems
      })

    }
    const isNulls = ['gamburger', 'limonad', 'palov', 'hotdog', 'juice', 'pizza']
    let counter = 0
    for (let key in isNulls) {
      if (this.state.isNull[isNulls[key]]) {
        counter++
        console.log(isNulls[key])
      }
    }
    let newOrderNow = this.state.orderNow
    if (counter === isNulls.length) {
      newOrderNow = true
      this.setState({ orderNow: newOrderNow })
    }
    else {
      newOrderNow = false
      this.setState({ orderNow: newOrderNow })
    }

  }

  render() {
    let Styled = {
      background: this.state.bg ? 'white' : 'black'
    }
    let Styled2 = {
      color: this.state.bg ? 'black' : 'white',
      fontSize: '24px',
      fontWeight: '700',
      ':hover': {
        color: 'green'
      }
    }
    AOS.init()

    return (
      <BrowserRouter>
        <div style={Styled}>
          <HeaderNav
            changeBack={this.changed}
            Added={this.Added}
            count={this.state.count}
            price={Math.abs(this.state.price.toFixed(2))}
            order={this.state.order}
            Removed={this.Removed}
            isNull={this.state.isNull}
            Styled2={Styled2}
            orderNow={this.state.orderNow}
          />
        </div>
      </BrowserRouter >
    )
  }
}

export default App
