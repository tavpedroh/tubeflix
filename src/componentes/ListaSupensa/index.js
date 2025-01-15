import './listasuspensa.css';

import React from "react";

const ListaSupensa = ({ 
        label, 
        valor, 
        onChange, 
        obrigatorio = false, 
        corDeFundo,
        categorias  = [],
        valorInicial
    }) => {
    const css = {backgroundColor: corDeFundo };
    
    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                style={css}
                required={obrigatorio} 
                value = {valorInicial} 
                onChange={(e) => onChange(e.target.value)} 
                
            >
                <option value="">
                    Selecione uma categoria
                </option>
                {categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaSupensa;