import "./editModal.css";

import React, { useEffect, useState } from "react";
import axios from "axios";


import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSupensa";
import Descricao from "../Descricao";
import Modal from "../Modal";

const EditModal = ({ video, isOpen, onClose, onSubmit, categorias }) => {
  const corDeFundo = "#03122F";
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    thumbnail: "",
    url: "",
    description: "",
  });

  // Inicializar os valores do formulário com os dados do vídeo ao abrir o modal
  useEffect(() => {
    if (video) {
      setFormData({
        title: video.title || "",
        category: video.category || "",
        thumbnail: video.thumbnail || "",
        url: video.url || "",
        description: video.description || "",
      });
    }
  }, [video]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/videos/${video.id}`, formData)
      .then(() => {
        alert("Vídeo editado com sucesso!");
        onSubmit(formData); // Atualiza a lista de vídeos
        onClose(); // Fecha o modal
      })
      .catch((error) => {
        console.error("Erro ao editar o vídeo:", error);
        alert("Erro ao editar o vídeo.");
      });
  };



  if (!isOpen) return null;

  return (
    isOpen && <Modal isOpen={isOpen} onClose={onClose}>
      <h2 style={{ fontSize: "24px", color: "#2271D1", marginBottom: "16px" }}>
        Editar Vídeo
      </h2>
      

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
        onSubmit={handleSave}
      >
        <CampoTexto
          label="Título"
          nome="title"
          corDeFundo={corDeFundo}
          valor={formData.title}
          onChange={(value) => handleChange("title", value)}
        />

        <ListaSuspensa
          obrigatorio
          label="Categoria"
          nome="category"
          corDeFundo={corDeFundo}
          onChange={(value) => handleChange("category", value)}
          categorias={categorias}
          valorInicial={formData.category}
        />

        <CampoTexto
          label="Thumbnail"
          nome="thumbnail"
          corDeFundo={corDeFundo}
          valor={formData.thumbnail}
          onChange={(value) => handleChange("thumbnail", value)}
        />

        <CampoTexto
          label="URL"
          nome="url"
          corDeFundo={corDeFundo}
          valor={formData.url}
          onChange={(value) => handleChange("url", value)}
        />

        <Descricao
          obrigatorio
          label="Descrição"
          nome="description"
          corDeFundo={corDeFundo}
          valor={formData.description}
          onChange={(value) => handleChange("description", value)}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#27ae60",
            color: "#fff",
            padding: "10px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Guardar
        </button>
      </form>
    </Modal>
  );
};

export default EditModal;
