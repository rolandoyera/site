import React from 'react';

const Card = ({ children }) => {
  return (
    <div>
      <div style={{
        backgroundColor: `hsl(0, 0%, 68%, .1)`,
        paddingLeft: `20px`,
        paddingTop: `10px`,
        paddingBottom: `20px`,
        paddingRight: `20px`,
        borderRadius: `5px`,
        border: `1px`,
        borderStyle: `solid`,
        borderColor: `hsl(0, 0%, 68%, .1)`,
        boxShadow: `0 0.125rem 0.25rem rgba(0, 0, 0, 0.775) !important`,
      }
      }>
        {children}
      </div>


    </div>
  );
}

export default Card;
