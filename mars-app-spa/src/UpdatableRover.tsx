import { CameraI, RoverFullI, RoverManifestI } from "./nasaInterfaces";

export type UpdatableUserChoices = {
    rover?: RoverFullI;
    manifest?: RoverManifestI;
    camera?: CameraI;
    sol?: number;
    setRover: (rover?: RoverFullI) => void;
    setManifest: (manifest?: RoverManifestI) => void;
    setCamera: (camera?: CameraI) => void;
    setSol: (sol?: number) => void;
};
