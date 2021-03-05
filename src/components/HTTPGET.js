import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                this.setState({
                    users: response.data
                })
            })
            .catch((error) => { console.log("o'xshamadi...") })
    }
    render() {
        const { users } = this.state
        return (
            <div>
                {
                    users.map((user, key) => <p>{key + 1}. {user.name}</p>)
                }
            </div>
        )
    }
}

export default PostList
