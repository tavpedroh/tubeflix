
import Categoria from '../Categoria';

import './banner.css';

import React, { useState } from 'react';

const Banner = ( ) => {

    

    const video = {
        id: 1,
        title: "「AMV」Welcome To The Mato - Marco Brasil Filho",
        description: "Anime Thumb: Isekai Nonbiri Nouka",
        url: "https://www.youtube.com/embed/D2QvK-7PO5g",
        category: "Música",
        thumbnail: "https://i.ytimg.com/vi/D2QvK-7PO5g/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAAT4cWyAXe8WIMfZcFHsE82KXPbg",
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