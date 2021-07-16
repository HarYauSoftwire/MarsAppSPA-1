import { useContext, useEffect, useState } from "react";
import { CameraI } from "../nasaInterfaces";
import { selectedRoverContext } from "../selectedRoverContext";
import { DropDownFC } from "./dropDownFC";

export const CameraDropDownFC: React.FC = () => {
    const { rover, solPhoto, setCamera } = useContext(selectedRoverContext);
    const [cameras, setCameras] = useState<CameraI[]>([]);
    useEffect(() => {
        if (rover && solPhoto) {
            let cameraList: CameraI[] = [];
            for (const camName of solPhoto.cameras) {
                const cam = rover.cameras.find((cam) => cam.name == camName);
                if (cam) {
                    cameraList.push(cam);
                }
            }
            setCameras(cameraList);
            console.log(cameraList);
        } else {
            setCameras([]);
        }
    }, [solPhoto]);

    const cameraDropDownOptions = cameras.map((camera, index) => {
        return { value: index, label: camera.full_name };
    });

    return (
        <div>
            <p>Camera Drop Down:</p>
            <DropDownFC
                options={cameraDropDownOptions}
                onSelect={(index) => setCamera(cameras[index])}
            />
        </div>
    );
};
