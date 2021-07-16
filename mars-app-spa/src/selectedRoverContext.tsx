import { createContext } from "react";
import { CameraI, RoverFullI } from "./nasaInterfaces";
import { UpdatableUserChoices } from "./UpdatableRover";

export const selectedRoverContext = createContext<UpdatableUserChoices>({
  setRover: (rover: RoverFullI) => {},
  setCamera: (camera: CameraI) => {},
  setSol: (sol: number) => {},
});
