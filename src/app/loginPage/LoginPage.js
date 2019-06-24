import React from 'react';
import { LoginForm } from './LoginForm';
import './LoginPage.css';
import { authenticationLogIn } from '../../services/authenticationService';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""

        }


        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitLogIn = this.onSubmitLogIn.bind(this);
    }



    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    }

    fetchLogInToken() {
        const { email, password } = this.state;
        return authenticationLogIn(email, password)
            .then(response => {
                localStorage.setItem('loginToken', response.accessToken)
            })

    }


    onSubmitLogIn(e) {
        e.preventDefault();
        this.fetchLogInToken()

    }


    render() {
        const { password, email } = this.state;

        return (
            <div className="login-container" >
                <div className="login-text">
                    <section>
                        <h3>BitBook Login</h3>
                        <article>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta dolor voluptates, consequuntur fuga molestiae vel. Eos quibusdam consequuntur atque reprehenderit architecto. Temporibus omnis error obcaecati tempore ipsum possimus expedita ipsam delectus? Similique, qui, explicabo maxime sapiente in, asperiores adipisci beatae dicta culpa delectus laborum possimus quis sint eos optio.
                        </article>
                    </section>
                </div>
                <LoginForm
                    onInputChange={this.onInputChange}
                    email={email}
                    password={password}
                    onSubmitLogIn={this.onSubmitLogIn}
                />
            </div>
        )
    }

}

