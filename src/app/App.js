import React from 'react';
import { RegisterPage } from './RegisterPage/RegisterPage';
import { LoginPage } from './loginPage/LoginPage';
import { authenticationLogIn } from '../services/authenticationService';
import { authenticationRegister } from '../services/authenticationService';



export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            register: true,
            token: null,
            name: "",
            email: "",
            password: ""

        }

        this.onRegisterClickChange = this.onRegisterClickChange.bind(this);
        this.onLoginClickChange = this.onLoginClickChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitLogIn = this.onSubmitLogIn.bind(this);
    }

    onRegisterClickChange() {
        this.setState({ register: true })
    }

    onLoginClickChange() {
        this.setState({ register: false })
    }

    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    }

    fetchLogInToken() {
        const { email, password } = this.state;
        authenticationLogIn(email, password)
            .then(res => console.log(res))

    }


    fetchRegisterToken() {
        const { email, password, name } = this.state;
        authenticationRegister(name, email, password)
            .then(res => console.log(res))


    }


    onSubmitLogIn(e) {
        e.preventDefault();
        this.fetchLogInToken()

    }

    render() {
        const { register, token, name, email, password } = this.state;

        if (token === null && register === true) {
            return (
                <>
                    <RegisterPage
                        onRegisterClickChange={this.onRegisterClickChange}
                        onLoginClickChange={this.onLoginClickChange}
                        onInputChange={this.onInputChange}
                        name={name}
                        email={email}
                        password={password}
                    />
                </>
            )
        } else if (token === null && register === false) {
            return (
                <>
                    <LoginPage
                        onLoginClickChange={this.onLoginClickChange}
                        onRegisterClickChange={this.onRegisterClickChange}
                        onInputChange={this.onInputChange}
                        email={email}
                        password={password}
                        onSubmitLogIn={this.onSubmitLogIn}
                    />

                </>
            )
        } else {
            return (
                <h1>Kidamo</h1>
            )
        }
    }
}
