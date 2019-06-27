import React from 'react';
import { fetchUsers } from '../../services/fetchUsers';
import { UserItem } from '../UserItem/UserItem';
import './UserPage.css';

export class UsersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            name: ""

        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    loadUsers() {
        fetchUsers()
            .then(users => {
                this.setState({
                    users
                })
            })
    }

    onInputChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    componentDidMount() {
        this.loadUsers()
    }



    render() {
        const { users, name } = this.state;

        const usersFilteredFirstName = users.filter(user => (
            user.firstName.toLowerCase().includes(name.toLowerCase())
        ));
        const usersFilteredLastName = users.filter(user => (
            user.lastName.toLowerCase().includes(name.toLowerCase())
        ));


        const allUsers = [...usersFilteredFirstName, ...usersFilteredLastName];


        if (users.length === 0) {
            return (
                <p>Loading</p>
            )
        }

        return (
            <>
                <div className="userPage-holder">
                    <i className="fas fa-search"></i>
                    <input name="name"
                        type="search"
                        placeholder="Search"
                        className="users-Page-input"
                        value={name}
                        onChange={this.onInputChange} />
                    {allUsers.map((user, i) => {
                        return <UserItem key={i} user={user} />
                    })}
                </div>
            </>
        )


    }
}