
import './card.css';

import React, { useState } from "react";

const Card = ({ url, title}) => {

    const [showIframe, setShowIframe] = useState(false);

    return(<div>
        {showIframe ? (<iframe 
                width="280" height="160" src={url}
                title={title} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
            />): (
                <img
                  src={`https://img.youtube.com/vi/${url.split("/embed/")[1]}/0.jpg`}
                  alt="Thumbnail"
                  style={{ width: "100%", height: "200px", cursor: "pointer" }}
                  onClick={() => setShowIframe(true)}
                />
              )}
        
    </div>);
};

export default Card;