import React from "react";
import styled from "styled-components";
import getFromApi from "../getFromApi";
import { PhotoI } from "../nasaInterfaces";

const Button = styled.button`
    font: inherit;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid slategrey;
    border-radius: 3px;
`;

type SendRequestButtonProps = {
    setPhotos: (photos: PhotoI[]) => void;
    url: string;
};

export const SendRequestButtonFC: React.FC<SendRequestButtonProps> = ({
    setPhotos,
    url,
}) => {
    return (
        <Button
            onClick={async () => {
                setPhotos(await getFromApi<PhotoI[]>(url));
            }}
        >
            Show Photos
        </Button>
    );
};
