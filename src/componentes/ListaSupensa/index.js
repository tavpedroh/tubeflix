import './listasuspensa.css';

import React from "react";

const ListaSupensa = ({ label, itens = [],  valor, aoAlterado, obrigatorio = false, corDeFundo }) => {
    const css = {backgroundColor: corDeFundo };
    
    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                style={css}
                required={obrigatorio} 
                value = {valor} 
                onChange={(evento) => aoAlterado(evento.target.value)} 
            >
                <option value="">Selecione uma categoria</option>
                {itens.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaSupensa;