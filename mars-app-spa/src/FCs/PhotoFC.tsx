import React from "react";
import { PhotoI } from "../nasaInterfaces";
import { PhotoImage } from "../Styles/Photo";

export const PhotoFC: React.FC<{ photo: PhotoI }> = ({ photo }) => {
    return (
        <>
            <PhotoImage className="marsPhoto" src={photo.img_src} />
        </>
    );
};
