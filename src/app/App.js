import React from 'react';
import { RegisterPage } from './RegisterPage/RegisterPage';
import { LoginPage } from './loginPage/LoginPage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Header } from './Header/Header';
import { Main } from './Main'
import { Footer } from './Footer/Footer'



class AppComponent extends React.Component {
    render() {
        const loginToken = localStorage.getItem('loginToken')
        const token = loginToken ? loginToken : null

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
        }

        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}

export const App = withRouter(AppComponent);

