import React from "react";
import { PhotoI } from "../nasaInterfaces";
import "../Styles/PhotoFC.css";

export const PhotoFC: React.FC<{ photo: PhotoI }> = ({ photo }) => {
  return (
    <>
      <img className="marsPhoto" src={photo.img_src} />
    </>
  );
};
