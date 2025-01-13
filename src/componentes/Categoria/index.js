import './categoria.css';

import Card from '../Card';

const Categoria = ({categoria, cards =[]}) => {
    return(
        cards.length > 0 && <section className='categoria'>
            <h3>{categoria.nome}</h3>
        <div className='categorias'>
            {cards.map((card, indice) => <Card key={indice} card={card} />)}
        </div>
        </section>
    );
}

export default Categoria;