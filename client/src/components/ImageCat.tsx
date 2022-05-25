import React, { FC } from "react";

const ImageCat: FC<{ image: string }> = ({ image }) => {
  return (
    <>
      <img src={image} alt="a cat" height="200px" width="200px" />
    </>
  );
};

export default ImageCat;
