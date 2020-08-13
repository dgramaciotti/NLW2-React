import React from "react";

import "./styles.css";
import sucessCheck from "../../assets/images/icons/success-check-icon.svg";
import { Link } from "react-router-dom";
interface SucessProps {
  title: string;
  description: string;
  action:string;
}

const SucessScreen: React.FC<SucessProps> = (props) => {
  return (
    <div className="sucess-page">
      <div className="sucess-block">
        <img src={sucessCheck} alt="Checked" />
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <Link className="action-button" to="/">
            {props.action}
        </Link>
      </div>
    </div>
  );
};

export default SucessScreen;
