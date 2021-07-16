import React, { useState } from "react";
import "./Styles/App.css";
import { CameraI, PhotoI, RoverFullI, RoverManifestI } from "./nasaInterfaces";
import { selectedRoverContext } from "./selectedRoverContext";
import { PhotoCollection } from "./FCs/PhotoCollectionFC";
import { SendRequestButtonFC } from "./FCs/SendRequestButtonFC";
import { DataEntryFC } from "./FCs/DataEntryFC";
function App() {
    const [selectedRover, setSelectedRover] = useState<
        RoverFullI | undefined
    >();
    const [manifest, setManifest] = useState<RoverManifestI | undefined>();
    const [selectedCamera, setSelectedCamera] = useState<CameraI | undefined>();
    const [sol, setSol] = useState<number | undefined>();

    const [photos, setPhotos] = useState<PhotoI[]>([]);

    return (
        <selectedRoverContext.Provider
            value={{
                rover: selectedRover,
                manifest: manifest,
                camera: selectedCamera,
                sol: sol,
                setRover: setSelectedRover,
                setManifest: setManifest,
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
