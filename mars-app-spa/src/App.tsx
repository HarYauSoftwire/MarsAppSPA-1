import React, { useState } from "react";
import "./Styles/App.css";
import { PhotoI } from "./nasaInterfaces";
import { PhotoCollection } from "./FCs/PhotoCollectionFC";
import { SendRequestButtonFC } from "./FCs/SendRequestButtonFC";
import { DataEntryFC } from "./FCs/DataEntryFC";
function App() {
    const [photoApiRequestUrl, setUrl] = useState<string | undefined>();
    const [photos, setPhotos] = useState<PhotoI[] | undefined>();

    return (
        <div className="App">
            <header className="App-header">
                <h1>Mars Rover Photo App</h1>
                <DataEntryFC
                    setUrl={setUrl}
                    onSelectionChanged={() => setPhotos(undefined)}
                />
                {photoApiRequestUrl && (
                    <>
                        <SendRequestButtonFC
                            url={photoApiRequestUrl}
                            setPhotos={setPhotos}
                        />
                        <PhotoCollection photos={photos} />
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
