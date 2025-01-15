import "./editModal.css";

import React from "react";

import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSupensa";
import Descricao from "../Descricao";
import Modal from "../Modal";

const EditModal = ({ video, isOpen, onClose, onSubmit, categorias }) => {
  const corDeFundo = "#03122F";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 style={{ fontSize: "24px", color: "#2271D1", marginBottom: "16px" }}>
        Editar Vídeo
      </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const updatedVideo = {
            ...video,
            title: e.target.title.value,
            description: e.target.description.value,
            category: e.target.category.value,
            thumbnail: e.target.thumbnail.value,
            url: e.target.url.value,
          };
          onSubmit(updatedVideo);
        }}
      >
        <CampoTexto
          label="Título"
          nome="title"
          corDeFundo={corDeFundo}
          conteudo={video.title}
        />

        <ListaSuspensa
          obrigatorio
          label="Categoria"
          nome="category"
          corDeFundo={corDeFundo}
          categorias={categorias}
          valorInicial={video.category}
        />

        <CampoTexto
          label="Imagem"
          nome="thumbnail"
          corDeFundo={corDeFundo}
          conteudo={video.thumbnail}
        />

        <CampoTexto
          label="URL"
          nome="url"
          corDeFundo={corDeFundo}
          conteudo={video.url}
        />

        <Descricao
          obrigatorio
          label="Descrição"
          nome="description"
          corDeFundo={corDeFundo}
          conteudo={video.description}
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
