import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import {
    CameraI,
    PhotoI,
    RoverFullI,
    RoverManifestI,
    SolPhotoI,
} from "./nasaInterfaces";
import { selectedRoverContext } from "./selectedRoverContext";
import { PhotoCollection } from "./FCs/PhotoCollectionFC";
import { SendRequestButtonFC } from "./FCs/SendRequestButtonFC";
import { DataEntryFC } from "./FCs/DataEntryFC";
function App() {
    const [selectedRover, setSelectedRover] = useState<
        RoverFullI | undefined
    >();
    const [manifest, setManifest] = useState<RoverManifestI | undefined>();
    const [sol, setSol] = useState<number | undefined>();
    const [solPhoto, setSolPhoto] = useState<SolPhotoI | undefined>();
    const [selectedCamera, setSelectedCamera] = useState<CameraI | undefined>();

    const [photos, setPhotos] = useState<PhotoI[] | undefined>();

    useEffect(() => {
        setSol(undefined);
    }, [manifest]);
    useEffect(() => {
        setSelectedCamera(undefined);
    }, [solPhoto]);
    useEffect(() => {
        setPhotos(undefined);
    }, [selectedCamera]);

    return (
        <selectedRoverContext.Provider
            value={{
                rover: selectedRover,
                manifest: manifest,
                solPhoto: solPhoto,
                camera: selectedCamera,
                sol: sol,
                setRover: setSelectedRover,
                setManifest: setManifest,
                setSolPhoto: setSolPhoto,
                setCamera: setSelectedCamera,
                setSol: setSol,
            }}
        >
            <div className="App">
                <header className="App-header">
                    <h1>Mars Rover Photo App</h1>
                    <DataEntryFC />
                    {selectedRover && selectedCamera && sol !== undefined && (
                        <>
                            <SendRequestButtonFC setPhotos={setPhotos} />
                            <PhotoCollection photos={photos} />
                        </>
                    )}
                </header>
            </div>
        </selectedRoverContext.Provider>
    );
}

export default App;
