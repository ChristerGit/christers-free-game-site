import React from "react"

const leaves_image_topright = {
    imageUrl: '../images/leaves_hiq.png',
    imageSize: 90,
  };
  
  export default function Leaves_topright() {
    return (
      <>
        <img
          src={leaves_image_topright.imageUrl}
          style={{
            width: leaves_image_topright.imageSize,
            height: leaves_image_topright.imageSize
          }}
        />
      </>
    );
  }