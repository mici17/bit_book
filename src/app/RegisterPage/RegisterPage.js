import React from 'react';
import { RegisterForm } from './RegisterForm'
import './RegisterPage.css'


export class RegisterPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="register-container">
                <div className="register-text">
                    <section>
                        <h3>BitBook Register</h3>
                        <article>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos porro, aliquam cumque unde illo doloribus autem animi eius molestias doloremque quas soluta accusantium asperiores. Amet saepe provident repellendus consectetur atque, eos vel omnis fugit? Fugiat ducimus fuga similique. Ut repellendus amet atque fugiat rem ratione sint deserunt laudantium similique.
                    </article>
                    </section>
                </div>
                <RegisterForm />
            </div>
        )
    }
}