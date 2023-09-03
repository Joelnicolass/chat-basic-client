import React from "react";

const getStyles = (size, isBordered, colorRGB) => {
  return {
    style: {
      width: size,
      height: size,
      border: isBordered ? `2px solid ${colorRGB}` : "none",
    },
  };
};

const AvatarImage = ({ img, alt, size, isBordered, colorRGB }) => {
  return <img {...getStyles(size, isBordered, colorRGB)} alt={alt} src={img} />;
};

export default AvatarImage;
