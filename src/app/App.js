import React from 'react';
import { RegisterPage } from './RegisterPage/RegisterPage'
import { LoginPage } from './loginPage/LoginPage'
import { Header } from './Header/Header'
import { Main } from './Main'


export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            register: true,
            token: null
        }
        this.onRegisterClickChange = this.onRegisterClickChange.bind(this);
        this.onLoginClickChange = this.onLoginClickChange.bind(this);
    }

    onRegisterClickChange() {
        this.setState({ register: true })
    }

    onLoginClickChange() {
        this.setState({ register: false })
    }

    render() {
        // const { register, token } = this.state
        // if (token === null && register === true) {
        //     return (
        //         <>
        //             <RegisterPage onRegisterClickChange={this.onRegisterClickChange} onLoginClickChange={this.onLoginClickChange} />
        //         </>
        //     )
        // } else if (token === null && register === false) {
        //     return (
        //         <>
        //             <LoginPage onLoginClickChange={this.onLoginClickChange} onRegisterClickChange={this.onRegisterClickChange} />
        //         </>
        //     )
        // } else {
        return (
            <>
                <Header />
                <Main />
            </>
        )
    }
}
// }
