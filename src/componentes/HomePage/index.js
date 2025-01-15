import './homepage.css';

import Card from '../../componentes/Card';
import Categoria from '../../componentes/Categoria';
import Banner from '../Banner';

import React, { useEffect, useState } from "react";
import axios from "axios";

import Edit from '../Edit';



const HomePage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/videos").then((response) => {
          setVideos(response.data);
        });
      }, []);



      const handleDelete = (id) => {
        setVideos(videos.filter((video) => video.id !== id));
      };
    
      const handleEdit = (editedVideo) => {
        setVideos(
          videos.map((video) =>
            video.id === editedVideo.id ? editedVideo : video
          )
        );
      };
  
      const getVideosByCategory = () => {
        const categories = {};
        videos.forEach((video) => {
          if (!categories[video.category]) {
            categories[video.category] = [];
          }
          categories[video.category].push(video);
        });
        return categories;
      };

      const categorizedVideos = getVideosByCategory();

      return (
        
        
        <div className='homepage'>
          <Banner />
             
          {Object.keys(categorizedVideos).map((category) => (
            <div 
              key={category} 
              style={{ 
                paddingBottom: "40px",
                paddingLeft: "16px",
                backgroundColor: "#191919",
                
              }}
              className='categorias'
            >
              <h2
                style={{
                  backgroundColor: Categoria[category] || "#444",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  fontSize: "20px",
                  maxWidth: "10em",
                  textAlign: "center"
                   
                }}
                > 
                  {category} 
                </h2>
              <div 
                style={{ 
                  display: "flex", 
                  gap: "16px", 
                  flexWrap: "wrap",
                  marginTop: "20px",
                  }}
              >
                {categorizedVideos[category].map((video) => (
                  <div
                    key={video.id}
                    style={{
                      border: `2px solid ${Categoria[category] || "#ddd"}`,
                      padding: "16px",
                      width: "300px",
      
                    }}
                  >
                    <h3>{video.title}</h3>
                    <Card 
                        url={video.url} 
                        title={video.title} 
                    />
                    <p>{video.description}</p>
                    <Edit 
                      video={video}
                      onDelete={handleDelete}
                      onEdit={handleEdit} 
                      categorias={[
                        "História",
                        "Geografia",
                        "GeoPolítica"
                      ]}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        );
}

export default HomePage;