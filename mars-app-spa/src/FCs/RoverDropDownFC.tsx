import React, { useEffect, useState } from "react";
import getFromApi from "../getFromApi";
import { RoverFullI } from "../nasaInterfaces";
import { PaddedDiv } from "../Styles/PaddedDiv";
import { DropDownFC } from "./dropDownFC";

type RoverDropDownProps = {
    rover?: RoverFullI;
    setRover: (rover?: RoverFullI) => void;
};

export const RoverDropDownFC: React.FC<RoverDropDownProps> = ({
    rover,
    setRover,
}) => {
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

    return (
        <PaddedDiv>
            <p>Rover:</p>
            <DropDownFC
                options={roverDropDownOptions}
                value={{ label: rover?.name }}
                onSelect={async (index) => {
                    setRover(rovers[index]);
                }}
            />
        </PaddedDiv>
    );
};
