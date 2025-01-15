import React from "react";

import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay"  onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Evita o fechamento ao clicar no conteúdo
        
      >
        <button 
            className="modal-close" 
            onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
