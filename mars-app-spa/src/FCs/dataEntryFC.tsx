import React, { useContext } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import { CameraDropDownFC } from "./CameraDropDownFC";
import { RoverDropDownFC } from "./RoverDropDownFC";
import { SolInputFC } from "./SolInputFC";
import { SolPhotoCountFC } from "./SolPhotoCountFC";

export const DataEntryFC: React.FC = () => {
    const programContext = useContext(selectedRoverContext);
    const { rover, manifest } = programContext;
    return (
        <>
            <RoverDropDownFC />
            {rover && manifest && (
                <>
                    <SolInputFC />
                    <SolPhotoCountFC />
                </>
            )}
            {rover && manifest && <CameraDropDownFC />}
        </>
    );
};
