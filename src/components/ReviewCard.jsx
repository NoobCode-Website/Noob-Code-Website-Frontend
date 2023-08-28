import React from 'react'
      
function ReviewCard ({ name, review }) {
  return (
    <div className="review-card bg-fixed bg-cover border p-5 rounded-4 shadow-md h-60 m-5">
      <p className="text-antiquewhite text-xl mb-2">" {review} "</p>
      <br/>
      <h3 className="text-gray-600 text-sm">--{name}</h3>
    </div>
  );
};
  
export default ReviewCard
