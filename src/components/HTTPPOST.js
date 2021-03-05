import React, { Component } from 'react'
import axios from 'axios'

class HTTPPOST extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", this.state)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const { id, name } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <br />
                    <input type='text' name='id' value={id} onChange={this.changeHandler} />
                    <br />
                    <input type='text' name='name' value={name} onChange={this.changeHandler} />
                    <br />
                    <button type='submit'>211-19</button>
                </form>
            </div>
        )
    }
}

export default HTTPPOST
