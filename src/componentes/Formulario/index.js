import './formulario.css';

import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSupensa';
import Descricao from '../Descricao';

import React, { useState } from 'react';
import axios from "axios";



const Formulario = ({ categorias }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        url: "",
        category: "",
        thumbnail: "",
      });
    
      // Função para lidar com mudanças nos campos do formulário
      const handleChange = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };
    
      // Função para salvar o vídeo
      const handleSave = () => {
        axios.post("http://localhost:3000/videos", formData).then(() => {
          alert("Vídeo criado com sucesso!");
          setFormData({
            title: "",
            description: "",
            url: "",
            category: "",
            thumbnail: "",
          });
        });
      };
    
      // Função para limpar o formulário
      const handleClear = () => {
        setFormData({
          title: "",
          description: "",
          url: "",
          category: "",
          thumbnail: "",
        });
      };
    




    //////
    
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [url, setUrl] = useState("");
    const [descricao, setDescricao] = useState("");

    const aoSalvar = (e) => {
        e.preventDefault();
    

    if (!titulo || !descricao  || !url || !categoria) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

    const novoVideo = {
        title: titulo,
        description: descricao,
        url: url,
        category: categoria,
        thumbnail: thumbnail,
      };

      axios
      .post("http://localhost:3000/videos", novoVideo)
      .then(() => {
        alert("Vídeo criado com sucesso!");
        setTitulo(""); 
        setDescricao("");
        setUrl("");
        setCategoria("");
        setThumbnail("");
      })
      .catch((error) => {
        console.error("Erro ao criar o vídeo:", error);
        alert("Erro ao criar o vídeo.");
      });
    };

    return(
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSalvar}>
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
                        aoAlterado={setTitulo}/>
                    <ListaSuspensa 
                        obrigatorio={true}
                        label="Categoria"
                        itens={categorias}
                        valor={categoria}
                        aoAlterado={setCategoria}/>
                </div>
                <div>
                    <CampoTexto 
                        label='thumbnail' 
                        placeholder='Informe o endereço da thumbnail '
                        aoAlterado={setThumbnail}/>
                    <CampoTexto 
                        obrigatorio={true}
                        label="URL"
                        placeholder="Digite o link do video"
                        valor={url}  
                        aoAlterado={setUrl}/>
                </div>
                    <Descricao obrigatorio={true}
                        label="Descrição"
                        placeholder="Sobre o que é esse vídeo?"
                        valor={descricao}  
                        aoAlterado={setDescricao}/>
                <div>
                    <button
                        onClick={handleSave}
                        style={{
                            backgroundColor: "#27ae60",
                            color: "#fff",
                            padding: "10px 16px",
                            
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            flex: 1,
                        }}
                        >
                        Salvar
                    </button>
                    <button
                        onClick={handleClear}
                        style={{
                            backgroundColor: "#e74c3c",
                            color: "#fff",
                            padding: "10px 16px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            flex: 1,
                        }}
                        >
                        Limpar
                    </button>
                </div>
                
            </form>
        </section>
    )


}

export default Formulario;