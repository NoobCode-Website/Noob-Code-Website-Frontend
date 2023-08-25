import React from 'react';

function VisionCard ({ title, description }) {
  return (
    <div className="vision-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VisionCard;

