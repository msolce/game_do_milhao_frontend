import React from "react";
import { Link } from "react-router-dom";
import Requests from '../services/requests'

export default function Login(props: any) {
    const { user, setUser } = props;

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    };


    const login = (event: any) => {
        const email = (document.getElementById('email') as HTMLInputElement);
        const password = (document.getElementById('password') as HTMLInputElement);
        const user = {
            email: email.value,
            password: password.value,
            login: false,
            msg: ''
        };

        Requests.login(user)
            .then(response => {
                // console.log(response)
                return response.data
            })
            .then(data => {
                // console.log(data)
                if (data.msg !== 'logado') {
                    setUser({ ...user, email: '', password: '', msg: data.msg })
                    return
                };
                sessionStorage.setItem('tokenGameDoMilhao', `Bearer ${data.token}`)
                setUser({ ...user, msg: 'Logado', login: true })

            })
            .catch(e => {
                console.error(`Erro na API login:  ${e}`)
            });

    };

    return (
        <>
            {user.login ? (<button onClick={props.logout} className='btn btn-success'> Logout </button>) : (
                <>
                    <div className="container">

                        <div className="submit-form fluid m-3">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="user">E-mail</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        required
                                        value={user.email}
                                        onChange={handleInputChange}
                                        name="email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="id">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        required
                                        value={user.password}
                                        onChange={handleInputChange}
                                        name="password"
                                    />
                                </div>


                                <button onClick={login} className="btn btn-success m-2">Login</button>

                                <Link to={'/criar-conta'} className="btn btn-primary m-2" >Criar conta</Link>
                            </div>
                        </div>
                    </div>
                </>)}
            <h1>
                {user.login ? user.email : user.msg}
            </h1>
        </>
    )
};

