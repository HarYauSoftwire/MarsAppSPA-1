import { CameraI } from "../nasaInterfaces";
import { PaddedDiv } from "../Styles/PaddedDiv";
import { DropDownFC } from "./dropDownFC";

type CameraDropDownProps = {
    cameraList: CameraI[];
    camera?: CameraI;
    setCamera: (camera?: CameraI) => void;
};

export const CameraDropDownFC: React.FC<CameraDropDownProps> = ({
    cameraList,
    camera,
    setCamera,
}) => {
    const cameraDropDownOptions = cameraList.map((camera, index) => {
        return { value: index, label: camera.full_name };
    });

    return (
        <PaddedDiv>
            <p>Camera:</p>
            <DropDownFC
                options={cameraDropDownOptions}
                value={{ label: camera?.full_name }}
                onSelect={(index) => setCamera(cameraList[index])}
            />
        </PaddedDiv>
    );
};
