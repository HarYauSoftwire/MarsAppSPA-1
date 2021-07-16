import { useContext } from "react";
import { selectedRoverContext } from "../selectedRoverContext";

export const SolPhotoCountFC: React.FC = () => {
    const { solPhoto } = useContext(selectedRoverContext);
    return <>{solPhoto && <p>Number of photos: {solPhoto.total_photos}</p>}</>;
};
