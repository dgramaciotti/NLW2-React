import React, {InputHTMLAttributes} from 'react';
import './styles.css';

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    text?:string;
}

const Input:React.FC<inputProps> = ({label,text,...rest}) => {
    return(
    <div className="input-block">
        <label htmlFor={label}>{text}</label>
        <input id={label} {...rest} />
    </div>
  )
}
export default Input;