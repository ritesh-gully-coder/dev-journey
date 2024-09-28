//jsonPlaceHolder u can use for fake api

import React, { Component } from 'react';
import axios from 'axios';


export class HttpGetMethodDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []

        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.org/users')
            .then(response => {
                console.log(response)
                this.setState({ users: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMsg:'Error retrieving data'
                })
            })

    }
    render() {
        const { users,errorMsg } = this.state;

        return (
            <div>List of users
                {
                    users?.length ?
                    users.map(user =><div key ={user.id}>{user.firstname}</div>):
                    null

                }
                {
                    errorMsg ? <div>{errorMsg}</div>:null
                }
            </div>

        )
    }
}

export default HttpGetMethodDemo;
