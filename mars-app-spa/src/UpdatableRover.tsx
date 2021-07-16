import {
    CameraI,
    RoverFullI,
    RoverManifestI,
    SolPhotoI,
} from "./nasaInterfaces";

export type UpdatableUserChoices = {
    rover?: RoverFullI;
    manifest?: RoverManifestI;
    solPhoto?: SolPhotoI;
    camera?: CameraI;
    sol?: number;
    setRover: (rover?: RoverFullI) => void;
    setManifest: (manifest?: RoverManifestI) => void;
    setSolPhoto: (solPhoto?: SolPhotoI) => void;
    setCamera: (camera?: CameraI) => void;
    setSol: (sol?: number) => void;
};
