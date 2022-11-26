import React from "react";

export const Tile = (props) => {
  // All of this needs testing when TileList component is used and props passed down:
  const objectArray = Object.values(props.props);

  return (
    <div className="tile-container">

      {
        objectArray.map((element, index) => {
          if (element === objectArray[0]) {
            return <p className='tile-title' key={index}>{element}</p>
          } else {
            return <p className='tile' key={index}>{element} </p>
          }          
        })
      }
      
    </div>
  );
};
