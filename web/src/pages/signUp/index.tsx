import React from 'react';

import './styles.css';
import Input from '../../components/input/index';
import ScreenArt from '../../components/screenArt';
import { Link } from 'react-router-dom';

const signUp: React.FC = () => {
  return (<div className="signup-page">
        <ScreenArt></ScreenArt>
        <div className="signup-area">
            <div className="signup-block">
                <strong>Cadastro</strong>
                <div className="fill-data">Preencha os dados abaixo para começar.</div>
                <Input label="nome" text="" placeholder="Nome"></Input>
                <Input label="sobrenome" text="" placeholder="Sobrenome"></Input>
                <Input label="e-mail" text="" placeholder="E-mail"></Input>
                <Input label="password" text="" placeholder="Senha"></Input>
                <Link className="finish-button" to="/signup/success">
                    Concluir Cadastro
                </Link>
            </div>
        </div>
    </div>
  )
}

export default signUp;