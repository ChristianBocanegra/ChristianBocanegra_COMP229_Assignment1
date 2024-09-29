/* <!-- Christian Bocanegra - Student N° 301374226 -->*/
import React from 'react';

const Project = ({ title, image, description }) => {
  return (
    <div className="project">
      <img src={image} alt={title}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Project;
