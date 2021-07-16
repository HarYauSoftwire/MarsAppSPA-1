import React, { Component, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { PhotoI } from "../nasaInterfaces";
import { PhotoImage } from "../Styles/Photo";

export const PhotoFC: React.FC<{ photo: PhotoI }> = ({ photo }) => {
    const [visibility, setVisibility] = useState(false);
    return (
        <>
            <PhotoImage
                className="marsPhoto"
                src={photo.img_src}
                onClick={() => setVisibility(true)}
            />
            {visibility && (
                <Lightbox
                    mainSrc={photo.img_src}
                    onCloseRequest={() => setVisibility(false)}
                />
            )}
        </>
    );
};
