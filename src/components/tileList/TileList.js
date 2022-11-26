import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  const propsArray = props.props; 

  return (
    <div>

     {
      propsArray.map((element, index) => {
        return <Tile key={index} props={element} />
      })
    }
          
    </div>
  );
};
   