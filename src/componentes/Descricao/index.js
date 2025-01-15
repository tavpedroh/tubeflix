import './descricao.css';

import React from "react";

const Descricao = ({ label, placeholder, valor, aoAlterado, obrigatorio = false, corDeFundo }) => {
    const css = {backgroundColor: corDeFundo };
    
    return(
        <div className='descricao'>
            <label>{label}</label>
            <textarea 
                style={css}
                value={valor} 
                placeholder={placeholder} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio}  
            />
        </div>);
}

export default Descricao;