import './formulario.css';

import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSupensa';
import Botao from '../Botao';

import { useState } from 'react';

const Formulario = ({aoCadastrar, categorias}) => {
    
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        console.log('form enviado', titulo, categoria, imagem, video );
        aoCadastrar({
            titulo,
            categoria,
            imagem,
            video
        })
    }

    return(
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSubmeter}>
                <section>
                    <h1>NOVO VIDEO</h1>
                    <h3>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h3>
                </section>
                <h2>Criar Card</h2>
                <div>
                <CampoTexto 
                    obrigatorio={true}
                    label="Título"
                    placeholder="Digite o título"
                    valor={titulo}
                    aoAlterado={valor=> setTitulo(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Categoria"
                    items={categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}/>
                </div>
                <div>
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <CampoTexto 
                    obrigatorio={true}
                    label="Video"
                    placeholder="Digite o link do video"
                    valor={video}  
                    aoAlterado={valor=> setVideo(valor)}/>
                </div>
                <div>
                    <Botao texto='GUARDAR' />
                    <Botao texto='LIMPAR' />
                </div>
            </form>
        </section>
    )


}

export default Formulario;