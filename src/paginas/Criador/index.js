
import Formulario from '../../componentes/Formulario';
import './criador.css';

import React, { useState, useEffect } from "react";
import axios from "axios";


const Criador = () => {

  


    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
        axios
          .get("http://localhost:3000/categorias")
          .then((response) => {
            setCategorias(response.data); 
          })
          .catch((error) => {
            console.error("Erro ao carregar categorias:", error);
          });
      }, []);

    return(
        <div className='criador'>
            <Formulario categorias={categorias} />
        </div>
    );
}

export default Criador;