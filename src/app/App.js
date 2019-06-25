import React from 'react';
import { RegisterPage } from './RegisterPage/RegisterPage';
import { LoginPage } from './loginPage/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './Header/Header';
import { Main } from './Main'



export class App extends React.Component {
    constructor(props) {
        super(props)

        const loginToken = localStorage.getItem('loginToken')
        const token = loginToken ? loginToken : null

        this.state = {
            token
        }


    }


    render() {
        const { token } = this.state;

        if (token === null) {
            return (
                <>
                    <Switch>
                        <Route path={`/register`} component={RegisterPage} />
                        <Route path={`/login`} component={LoginPage} />
                        <Redirect to={`/register`} component={RegisterPage} />
                    </Switch>

                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <Switch>
                        <Redirect to={`/feed`} component={Main} />
                    </Switch>
                    <Main />
                </>
            )
        }
    }
}

