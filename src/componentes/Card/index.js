import Modal from '../Modal';
import './card.css';

const Card = () => {
    return(<div>
        <iframe 
                width="100%" height="72%" src="https://www.youtube.com/embed/3rKX9CfxwXA"
                title="titulo" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        <div><Modal/></div>
    </div>)
}

export default Card;