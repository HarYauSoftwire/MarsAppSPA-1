import { createContext } from "react";
import { UpdatableUserChoices } from "./UpdatableRover";

export const selectedRoverContext = createContext<UpdatableUserChoices>({
    setRover: () => {},
    setManifest: () => {},
    setSolPhoto: () => {},
    setCamera: () => {},
    setSol: () => {},
});
