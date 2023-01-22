import React from 'react';
import { Link } from 'react-router-dom';

function Header(props:any){


    return (
    <>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <Link to={'/'} className='navbard-brand'>Game do Milhão</Link>
            <div className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to={'/partidas'} className='nav-link'>Partidas</Link>                    
                </li> 
                <li className='nav-item'>
                    <Link to={'/login'} className='nav-link'>{props.user.login ? `Logout` : `Login`}</Link>
                </li>
            </div>
        </nav>
   </>
    );
};

export default Header;