import React from "react";
import './NavbarComponent.styles.scss';
import logo from '../../assets/logo.png';
import {Outlet, Link} from 'react-router-dom';

export const NavbarComponent : React.FC = ()=> {
    return(
        <React.Fragment>
            <div className="navigation-wrapper">
                <Link className="logo-container" to={"/"}>
                    <img src = {logo} width={'48px'} height={'48px'} alt={'brand'}/>
                </Link>
                <div className="nav-links-wrapper">
                    <Link className="nav-link" to={"/shop"}>Shop</Link>
                    <Link className="nav-link" to={"/auth"}>Sign in</Link>
                </div>                
            </div>            
            <Outlet/>
        </React.Fragment>        
    )
}