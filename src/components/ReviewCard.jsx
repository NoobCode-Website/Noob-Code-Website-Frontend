import React from 'react'
      
function ReviewCard ({ name, review }) {
  return (
    <div className="review-card">
      <p>" {review} "</p>
      <br/>
      <h3>--{name}</h3>
    </div>
  );
};
  
export default ReviewCard
