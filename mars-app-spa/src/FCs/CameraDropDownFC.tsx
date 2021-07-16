import { useContext, useEffect, useState } from "react";
import { CameraI } from "../nasaInterfaces";
import { selectedRoverContext } from "../selectedRoverContext";
import { DropDownFC } from "./dropDownFC";

export const CameraDropDownFC: React.FC = () => {
    const { rover, solPhoto, camera, setCamera } =
        useContext(selectedRoverContext);
    const [cameras, setCameras] = useState<CameraI[]>([]);
    useEffect(() => {
        if (rover && solPhoto) {
            let cameraList: CameraI[] = [];
            for (const camName of solPhoto.cameras) {
                const cam = rover.cameras.find((cam) => cam.name === camName);
                if (cam) {
                    cameraList.push(cam);
                }
            }
            setCameras(cameraList);
        } else {
            setCameras([]);
        }
    }, [rover, solPhoto]);

    const cameraDropDownOptions = cameras.map((camera, index) => {
        return { value: index, label: camera.full_name };
    });

    return (
        <div>
            <p>Camera:</p>
            <DropDownFC
                options={cameraDropDownOptions}
                value={{ label: camera?.full_name }}
                onSelect={(index) => setCamera(cameras[index])}
            />
        </div>
    );
};
