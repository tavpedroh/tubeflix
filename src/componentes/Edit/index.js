import React, { useState } from "react";
import axios from "axios";

import EditModal from "../EditModal";

import './edit.css';

const Edit = ({ video, onDelete, onEdit, categorias }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/videos/${video.id}`).then(() => {
      onDelete(video.id);
    });
  };

  const handleEdit = (updatedVideo) => {
    axios
      .put(`http://localhost:3001/videos/${video.id}`, updatedVideo)
      .then((response) => {
        onEdit(response.data); // Atualiza os dados na interface
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar o vídeo:", error);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
      {/* Botão de editar */}
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundColor: "#3498db",
          color: "#fff",
          padding: "8px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          flex: 1,
        }}
      >
        Editar
      </button>

      {/* Botão de deletar */}
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: "#e74c3c",
          color: "#fff",
          padding: "8px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          flex: 1,
        }}
      >
        Deletar
      </button>

      <EditModal
        video={video}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleEdit}
        categorias={categorias}
      />
    </div>
  );
};

export default Edit;
