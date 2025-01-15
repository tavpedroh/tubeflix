import './campotexto.css';

import React from "react";

const CampoTexto = ({ 
        label, 
        placeholder, 
        valor, 
        aoAlterado, 
        obrigatorio = false, 
        corDeFundo 
    }) => {
    const css = {backgroundColor: corDeFundo };
    
    return(
        <div className='campo-texto' >
            <label>{label}</label>
            <input 
                type = "text"
                value={valor} 
                placeholder={placeholder} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio}  
                style={css}
            />
        </div>);
}

export default CampoTexto;