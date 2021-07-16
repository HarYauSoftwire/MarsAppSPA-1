import React, { useContext } from "react";
import styled from "styled-components";
import getFromApi from "../getFromApi";
import { PhotoI } from "../nasaInterfaces";
import { selectedRoverContext } from "../selectedRoverContext";

const Button = styled.button`
  font: inherit;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid slategrey;
  border-radius: 3px;
`;

export const SendRequestButtonFC: React.FC<{
  setPhotos: (photos: PhotoI[]) => void;
}> = ({ setPhotos }) => {
  const programContext = useContext(selectedRoverContext);
  const roverName = programContext.rover?.name;
  const cameraName = programContext.camera?.name;
  const sol = programContext.sol;

  return (
    <Button
      onClick={async () => {
        setPhotos(
          await getFromApi(
            `http://localhost:8000/rovers/${roverName}/photos/${cameraName}/?sol=${sol}`
          )
        );
      }}
    >
      Show Photos
    </Button>
  );
};
