import React, { useEffect, useState } from "react";
import { CameraDropDownFC } from "./CameraDropDownFC";
import { FlexDiv } from "../Styles/FlexDiv";
import { RoverDropDownFC } from "./RoverDropDownFC";
import { SolInputFC } from "./SolInputFC";
import { SolPhotoCountFC } from "./SolPhotoCountFC";
import {
    RoverFullI,
    RoverManifestI,
    SolPhotoI,
    CameraI,
} from "../nasaInterfaces";
import getFromApi from "../getFromApi";

type DataEntryProps = {
    setUrl: (url?: string) => void;
    onSelectionChanged: () => void;
};

export const DataEntryFC: React.FC<DataEntryProps> = ({
    setUrl,
    onSelectionChanged,
}) => {
    const [rover, setRover] = useState<RoverFullI | undefined>();
    const [manifest, setManifest] = useState<RoverManifestI | undefined>();
    const [sol, setSol] = useState<number | undefined>();
    const [solPhoto, setSolPhoto] = useState<SolPhotoI | undefined>();
    const [camera, setCamera] = useState<CameraI | undefined>();

    useEffect(() => {
        (async () => {
            setSol(undefined);
            setSolPhoto(undefined);
            if (rover) {
                const manifest = await getFromApi<RoverManifestI>(
                    `http://localhost:8000/manifest/${rover.name}`
                );
                setManifest(manifest);
            }
        })();
    }, [rover]);
    useEffect(() => {
        setSol(undefined);
    }, [manifest]);
    useEffect(() => {
        setSolPhoto(manifest?.photos?.find((solPhoto) => solPhoto.sol === sol));
    }, [manifest, sol]);
    useEffect(() => {
        setCamera(undefined);
    }, [solPhoto]);
    useEffect(() => {
        onSelectionChanged();
    }, [camera]);

    useEffect(() => {
        if (rover && camera && sol !== undefined) {
            setUrl(
                `http://localhost:8000/rovers/${rover.name}/photos/${camera.name}/?sol=${sol}`
            );
        } else {
            setUrl(undefined);
        }
    });

    function getCameraList(): CameraI[] {
        if (rover && solPhoto) {
            let cameraList: CameraI[] = [];
            for (const camName of solPhoto.cameras) {
                const cam = rover.cameras.find((cam) => cam.name === camName);
                if (cam) {
                    cameraList.push(cam);
                }
            }
            return cameraList;
        } else {
            return [];
        }
    }
    const cameras = getCameraList();

    return (
        <FlexDiv>
            <RoverDropDownFC rover={rover} setRover={setRover} />
            {rover && manifest && (
                <div>
                    <SolInputFC
                        sol={sol}
                        setSol={setSol}
                        maxSol={rover.max_sol}
                    />
                    <SolPhotoCountFC
                        photoCount={
                            sol !== undefined
                                ? solPhoto
                                    ? solPhoto.total_photos
                                    : 0
                                : undefined
                        }
                    />
                </div>
            )}
            {rover && solPhoto && (
                <CameraDropDownFC
                    cameraList={cameras}
                    camera={camera}
                    setCamera={setCamera}
                />
            )}
        </FlexDiv>
    );
};
