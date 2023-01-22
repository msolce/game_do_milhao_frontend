import React from "react";
import Request from '../services/requests'

export default function Login(props:any){
    const { user, setUser } = props;

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setUser({...user, [name]: value})
    };


    const login = (event: any) => {
        const email = (document.getElementById('email') as HTMLInputElement);
        const password = (document.getElementById('password') as HTMLInputElement);
        const user = {
            email: email.value,
            password: password.value,
            login: false
        };  
        //Aqui com o name e manda para a api

        Request.login(user)
               .then(response => {
                    console.log(response)
               })
               .then(data => {
                //gravar no logal storage o token
               })

        //se retornar

        setUser(user);
    };

    return (
        <>
            {user.login ? ( <button onClick={props.logout} className='btn btn-success'> Logout </button>) : (<>
                <div className="submit-form">
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


                        <button onClick={login} className="btn btn-success">
                            Login
                        </button>                    
                    </div>
                </div>
            </>)}
            <h1>
                {user.login ? user.email : ''}
            </h1>
        </>
    )
};

