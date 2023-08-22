import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="Linechartcard">
      <div className="cardBodyy">
        {children}
      </div>
    </div>
  );
};

export default Card;