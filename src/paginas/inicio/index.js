import './inicio.css';


import Banner from '../../componentes/Banner';
import Categoria from '../../componentes/Categoria';
import Card from '../../componentes/Card';


const Inicio = ({categorias}) => {

    

    return(
        <div>
            <Banner />   
            <section className="categorias">
                {categorias.map((categoria, indice) => <Categoria key={indice} categoria={categoria} />)}
            </section>
        </div>
    );
}

export default Inicio;