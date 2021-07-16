import { CameraI, RoverFullI } from "./nasaInterfaces";

export type UpdatableUserChoices = {
    rover?: RoverFullI;
    camera?: CameraI;
    sol?: number;
    setRover: (rover?: RoverFullI) => void;
    setCamera: (camera?: CameraI) => void;
    setSol: (sol?: number) => void;
};
