import './campotexto.css';

import React from "react";

const CampoTexto = ({ 
        label, 
        placeholder, 
        valor, 
        onChange, 
        obrigatorio = false, 
        corDeFundo, 
        nome
    }) => {
    const css = {backgroundColor: corDeFundo };
    
    return(
        <div className='campo-texto' >
            <label htmlFor={nome}>{label}</label>
            <input 
                id={nome}
                type = "text"
                value={valor} 
                placeholder={placeholder} 
                onChange={(e) => onChange(e.target.value)} 
                required={obrigatorio}  
                style={css}
                name={nome}
            ></input>
        </div>);
}

export default CampoTexto;