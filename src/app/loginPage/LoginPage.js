import React from 'react';
import { LoginForm } from './LoginForm';
import './LoginPage.css'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }







    render() {
        return (
            <div className="login-container">
                <div className="login-text">
                    <section>
                        <h3>BitBook Login</h3>
                        <article>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta dolor voluptates, consequuntur fuga molestiae vel. Eos quibusdam consequuntur atque reprehenderit architecto. Temporibus omnis error obcaecati tempore ipsum possimus expedita ipsam delectus? Similique, qui, explicabo maxime sapiente in, asperiores adipisci beatae dicta culpa delectus laborum possimus quis sint eos optio.
                    </article>
                    </section>
                </div>
                <LoginForm />
            </div>
        )
    }
}