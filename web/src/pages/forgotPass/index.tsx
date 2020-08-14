import React from 'react';
import './styles.css';
import ScreenArt from '../../components/screenArt';
import Input from '../../components/input/index';
import { Link } from 'react-router-dom';
const ForgotPass: React.FC = () => {
  return (
      <div className="forgotPass-page">
          <ScreenArt></ScreenArt>
          <div className="forgotPass-area">
              <div className="forgotPass-form">
                <strong>Esqueceu sua senha?</strong>
                <div>Não esquenta,<br/> vamos dar um jeito nisso.</div>
                <Input label="e-mail" placeholder="E-mail"></Input>
                <Link to="/forgot-my-pass/success">
                 <button>Enviar</button>
                </Link>
              </div>
          </div>
      </div>
  )
}

export default ForgotPass;