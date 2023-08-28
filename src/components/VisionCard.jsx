import React from 'react';

function VisionCard ({ title, description }) {
  return (
    <div className="vision-card bg-fixed bg-cover border p-4 rounded-4 shadow-md h-60 m-10">
      <h3 className="text-#666666-600 text-xl mb-2">{title}</h3>
      <p className="text-antiquewhite-600 text-l">{description}</p>
    </div>
  );
};

export default VisionCard;

