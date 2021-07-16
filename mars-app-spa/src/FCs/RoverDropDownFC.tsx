import React, { useContext, useEffect, useState } from "react";
import getFromApi from "../getFromApi";
import { RoverFullI, RoverManifestI } from "../nasaInterfaces";
import { selectedRoverContext } from "../selectedRoverContext";
import { PaddedDiv } from "../Styles/PaddedDiv";
import { DropDownFC } from "./dropDownFC";

export const RoverDropDownFC: React.FC = () => {
    const { rover, setRover, setManifest, setCamera, setSolPhoto, setSol } =
        useContext(selectedRoverContext);
    const [rovers, setRovers] = useState<RoverFullI[]>([]);
    const roverDropDownOptions = rovers.map((rover, index) => {
        return { value: index, label: rover.name };
    });
    useEffect(() => {
        (async () => {
            setRovers(
                await getFromApi<RoverFullI[]>("http://localhost:8000/rovers/")
            );
        })();
    }, []);

    useEffect(() => {
        setCamera(undefined);
        setSolPhoto(undefined);
        setSol(undefined);
    }, [rover, setCamera, setSolPhoto, setSol]);

    return (
        <PaddedDiv>
            <p>Rover:</p>
            <DropDownFC
                options={roverDropDownOptions}
                value={{ label: rover?.name }}
                onSelect={async (index) => {
                    setRover(rovers[index]);
                    const manifest = await getFromApi<RoverManifestI>(
                        `http://localhost:8000/manifest/${rovers[index].name}`
                    );
                    setManifest(manifest);
                }}
            />
        </PaddedDiv>
    );
};
