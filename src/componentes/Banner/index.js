import './banner.css';

const Banner = (imagem) => {
    return(
        <section className='banner' style={{backgroundImage: imagem}}>
            <div>
                <h1>Categoria</h1>
                <h1>Titulo</h1> 
                <p>Descricao</p>
            </div>
            <iframe 
                width="100%" height="72%" src="https://www.youtube.com/embed/3rKX9CfxwXA"
                title="titulo" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            >
            </iframe>
        </section>
    );
}

export default Banner;