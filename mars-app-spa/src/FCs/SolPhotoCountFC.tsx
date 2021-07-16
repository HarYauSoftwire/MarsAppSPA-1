import { useContext } from "react";
import { selectedRoverContext } from "../selectedRoverContext";

export const SolPhotoCountFC: React.FC = () => {
    const { sol, solPhoto } = useContext(selectedRoverContext);
    return (
        <>
            {sol && (
                <p>Number of photos: {solPhoto ? solPhoto.total_photos : 0}</p>
            )}
        </>
    );
};
