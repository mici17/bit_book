import React from 'react';
import { RegisterForm } from './RegisterForm'
import './RegisterPage.css'
import { authenticationRegister } from '../../services/authenticationService';


export class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""


        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitRegister = this.onSubmitRegister.bind(this);
    }

    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    }


    fetchRegisterToken() {
        const { email, password, name } = this.state;
        authenticationRegister(name, email, password)
            .then((response) => {
                this.props.history.push('/login')
                return response
            })
            .catch((errorMessage) => {
                this.setState({
                    error: errorMessage
                })
            })
    }


    onSubmitRegister(e) {
        e.preventDefault();
        this.fetchRegisterToken();
    }



    render() {
        const { name, email, password, error } = this.state;

        return (
            <div className="register-container" >
                <div className="register-text">
                    <section>
                        <h3>BitBook Register</h3>
                        <article>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos porro, aliquam cumque unde illo doloribus autem animi eius molestias doloremque quas soluta accusantium asperiores. Amet saepe provident repellendus consectetur atque, eos vel omnis fugit? Fugiat ducimus fuga similique. Ut repellendus amet atque fugiat rem ratione sint deserunt laudantium similique.
                        </article>
                    </section>
                </div>
                <RegisterForm
                    onInputChange={this.onInputChange}
                    name={name}
                    email={email}
                    password={password}
                    onSubmitRegister={this.onSubmitRegister}
                    error={error}
                />
            </div>

        )
    }
}