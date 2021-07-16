import React, { useContext } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import { CameraDropDownFC } from "./CameraDropDownFC";
import { FlexDiv } from "../Styles/FlexDiv";
import { RoverDropDownFC } from "./RoverDropDownFC";
import { SolInputFC } from "./SolInputFC";
import { SolPhotoCountFC } from "./SolPhotoCountFC";

export const DataEntryFC: React.FC = () => {
    const { rover, manifest, solPhoto } = useContext(selectedRoverContext);
    return (
        <FlexDiv>
            <RoverDropDownFC />
            {rover && manifest && (
                <div>
                    <SolInputFC />
                    <SolPhotoCountFC />
                </div>
            )}
            {rover && solPhoto && <CameraDropDownFC />}
        </FlexDiv>
    );
};
