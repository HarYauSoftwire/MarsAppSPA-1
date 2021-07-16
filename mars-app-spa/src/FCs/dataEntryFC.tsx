import React, { useContext } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import { CameraDropDownFC } from "./CameraDropDownFC";
import { RoverDropDownFC } from "./RoverDropDownFC";
import { SolInputFC } from "./SolInputFC";

export const DataEntryFC: React.FC = () => {
    const programContext = useContext(selectedRoverContext);
    return (
        <>
            <RoverDropDownFC />
            {programContext.rover && (
                <>
                    <CameraDropDownFC />
                    <SolInputFC />
                </>
            )}
        </>
    );
};
