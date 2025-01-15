import './descricao.css';

import React from "react";

const Descricao = ({ 
        label, 
        placeholder, 
        valor, 
        nome,
        onChange, 
        obrigatorio = false, 
        corDeFundo 
    }) => {
    const css = {backgroundColor: corDeFundo };
    
    return(
        <div className='descricao'>
            <label htmlFor={nome}>{label}</label>
            <textarea 
                id={nome}
                style={css}
                value={valor} 
                placeholder={placeholder} 
                onChange={(e) => onChange(e.target.value)} 
                required={obrigatorio}  
                name={nome}
            />
        </div>);
}

export default Descricao;