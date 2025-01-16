import './formulario.css';

import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSupensa';
import Descricao from '../Descricao';

import React, { useState, useEffect } from 'react';
import axios from "axios";



const Formulario = () => {

    const [categorias, setCategories] = useState([]);
      
    useEffect(() => {
      axios.get("http://localhost:3001/categories")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.error("Erro ao carregar categorias:", error);
        });
    }, []);



    const [formData, setFormData] = useState({
        title: "",
        description: "",
        url: "",
        category: "",
        thumbnail: "",
      });
    
      const handleChange = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };
    
      const handleSave = () => {

        const { title, description, url, category } = formData;

        if (!title || !description || !url || !category) {
          alert("Por favor, preencha todos os campos obrigatórios.");
          return;
        }

        axios
          .post("http://localhost:3001/videos", formData)
          .then(() => {
            alert("Vídeo criado com sucesso!");
            setFormData({
              title: "",
              description: "",
              url: "",
              category: "",
              thumbnail: "",
            });
            }).catch((error) => {
              console.error("Erro ao criar o vídeo:", error);
              alert("Erro ao criar o vídeo.");
            });
      };
    
        const handleClear = (e) => {
          e.preventDefault();
          setFormData({
            title: "",
            description: "",
            url: "",
            category: "",
            thumbnail: "",
          });
        };
    

    return(
        <section className='formulario-container'>
            <form className='formulario' >
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
                        valor={formData.title}
                        onChange={(value) => handleChange("title", value)}/>
                    <ListaSuspensa 
                        obrigatorio={true}
                        label="Categoria"
                        valorInicial={formData.category}
                        categorias={categorias}
                        onChange={(value) => handleChange("category", value)}/>
                </div>
                <div>
                    <CampoTexto 
                        label='Thumbnail' 
                        placeholder='Informe o endereço da thumbnail '
                        valor={formData.thumbnail}
                        onChange={(value) => handleChange("thumbnail", value)}/>
                    <CampoTexto 
                        obrigatorio={true}
                        label="URL"
                        placeholder="Digite o link do video (use a versão embed)"
                        valor={formData.url}  
                        onChange={(value) => handleChange("url", value)}/>
                </div>
                    <Descricao obrigatorio={true}
                        label="Descrição"
                        placeholder="Sobre o que é esse vídeo?"
                        valor={formData.description}  
                        onChange={(value) => handleChange("description", value)}/>
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