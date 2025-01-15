
import Categoria from '../Categoria';

import './banner.css';

import React, { useState } from 'react';

const Banner = ( ) => {

    

    const video = {
        id: 1,
        title: "o BRASIL na SEGUNDA GUERRA MUNDIAL",
        description: "O Brasil na Segunda Guerra Mundial A partir do dia 1° de setembro de 1939 o mundo nunca mais foi o mesmo. Isso por que a Alemanha nazista liderada por Adolf Hitler invadiu sua vizinha Polônia iniciando o maior conflito armado de todos os tempos: a Segunda Guerra Mundial.",
        url: "https://www.youtube.com/embed/B5nJX-rmIgo",
        category: "História",
        thumbnail: "https://img.youtube.com/vi/B5nJX-rmIgo/maxresdefault.jpg",
      };

      const Categorias = Categoria[video.category];

    return(
        <div 
                className="banner-background" 
                style={{ backgroundImage: `url(${video.thumbnail})` }}
            >
            <div className="banner-container">
                <div className="banner-content">
                    <span 
                        className="banner-category" 
                        style={{ backgroundColor: Categorias }} 
                        >
                        {video.category}
                    </span>
                    <h1 className="banner-title">{video.title}</h1>
                    <p className="banner-description">{video.description}</p>  
                </div>
                <iframe
                    src={video.url}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="banner-iframe"
                />
            </div>
        </div>
    );
}

export default Banner;