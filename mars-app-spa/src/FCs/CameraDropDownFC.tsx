import { useContext, useEffect, useState } from "react";
import { CameraI } from "../nasaInterfaces";
import { selectedRoverContext } from "../selectedRoverContext";
import { DropDownFC } from "./dropDownFC";

export const CameraDropDownFC: React.FC = () => {
    const programContext = useContext(selectedRoverContext);
    const [cameras, setCameras] = useState<CameraI[]>([]);
    useEffect(() => {
        setCameras(programContext.rover?.cameras || []);
    }, [programContext.rover]);

    const cameraDropDownOptions = cameras.map((camera, index) => {
        return { value: index, label: camera.full_name };
    });

    return (
        <div>
            <p>Camera Drop Down:</p>
            <DropDownFC
                options={cameraDropDownOptions}
                onSelect={(index) => programContext.setCamera(cameras[index])}
            />
        </div>
    );
};
