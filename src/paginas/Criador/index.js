import { useState } from 'react';
import Formulario from '../../componentes/Formulario';
import './criador.css';

const Criador = ({categorias}) => {



    const inicial = [
        {
            titulo: 'JULIANA AMOASEI',
            
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            categoria: categorias[0].nome
        }
    ]


    const[cards, setCards] = useState([inicial]);


    return(
        <div className='criador'>
            <Formulario categorias={categorias.map(categoria => categoria.nome)} aoCadastrar={card => setCards([...cards, card])}/>
        </div>
    );
}

export default Criador;