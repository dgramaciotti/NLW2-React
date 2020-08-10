import React, {SelectHTMLAttributes} from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label:string;
    text:string;
    options: Array<{value: string, label: string}>;
}

const Select:React.FC<SelectProps> = ({label,text,options,...rest}) => {
    return(
    <div className="select-block">
        <label htmlFor={label}>{text}</label>
        <select id={label} {...rest}>
            <option value="" disabled hidden>Selecione uma opção</option>
            {options.map((option)=>{
                return <option key={option.value} value={option.value}>{option.label}</option>
            })}
        </select>
    </div>
  )
}
export default Select;