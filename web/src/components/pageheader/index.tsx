import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

import BackIcon from '../../assets/images/icons/back.svg';
import LogoImg from '../../assets/images/logo.svg';

interface HeaderProps{
    title: string;
    description?:string;
}
const Header: React.FC<HeaderProps>  = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={BackIcon} alt="page-back icon"/>
                </Link>
                <img src={LogoImg} alt="proffy logo"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description ? <p id="description">{props.description}</p>:null}
                {props.children}
            </div>
        </header>
    )
}
export default Header;