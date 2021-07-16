import React, { useContext } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import { PaddedDiv } from "../Styles/PaddedDiv";
import { SolInputBox } from "../Styles/SolInput";

export const SolInputFC: React.FC = () => {
    const { rover, manifest, setSolPhoto, sol, setSol } =
        useContext(selectedRoverContext);
    const maxSol: number = rover ? rover.max_sol : 0;

    return (
        <>
            {manifest && (
                <PaddedDiv>
                    <p>Martian days since landing:</p>
                    <SolInputBox
                        className="solInputBox"
                        type="text"
                        value={sol !== undefined ? sol.toString() : ""}
                        onChange={(e) => {
                            let newStr = e.target.value;
                            const regexp = /^[0-9]+$/;
                            if (newStr === "") {
                                setSol(undefined);
                                setSolPhoto(undefined);
                            } else if (regexp.test(newStr)) {
                                let sol = Number(newStr);
                                if (sol > maxSol) {
                                    sol = maxSol;
                                    newStr = maxSol.toString();
                                }
                                setSol(sol);
                                setSolPhoto(
                                    manifest.photos.find(
                                        (solPhoto) => solPhoto.sol === sol
                                    )
                                );
                            }
                        }}
                    />
                </PaddedDiv>
            )}
        </>
    );
};
