/* <!-- Christian Bocanegra - Student N° 301374226 -->*/
import React from 'react';

const Service = ({ title, image}) => {
  return (
    <div className="service">
      <img src={image} alt={title}/>
      <h4>{title}</h4>
    </div>
  );
};

export default Service;