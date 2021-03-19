import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class Axios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data);
                this.setState({ users: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    renderTableData() {
        return this.state.users.map((users, index) => {
            const { id, username, email, phone } = users
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='users'>
                    <tr id='header'>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Axios;