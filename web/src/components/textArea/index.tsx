import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';

interface textAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label:string;
    text:string;
}

const textArea:React.FC<textAreaProps> = ({label,text,...rest}) => {
    return(
    <div className="text-area-block">
        <label htmlFor={label}>{text}</label>
        <textarea id={label} {...rest} />
    </div>
  )
}
export default textArea;