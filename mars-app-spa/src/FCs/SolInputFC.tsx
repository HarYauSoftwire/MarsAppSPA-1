import React, { useContext } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import { PaddedDiv } from "../Styles/PaddedDiv";
import { SolInputBox } from "../Styles/SolInput";

export const SolInputFC: React.FC = () => {
    const { rover, manifest, setSolPhoto, sol, setSol } =
        useContext(selectedRoverContext);
    const maxSol: number = rover ? rover.max_sol : 0;
    return (
        <PaddedDiv>
            <p>Martian days since landing:</p>
            <SolInputBox
                className="solInputBox"
                type="text"
                value={sol !== undefined ? sol.toString() : ""}
                onChange={(e) => {
                    const solString = e.target.value;
                    try {
                        const sol = convertStringToSol(solString, maxSol);
                        setSol(sol);
                        setSolPhoto(
                            manifest?.photos?.find(
                                (solPhoto) => solPhoto.sol === sol
                            )
                        );
                    } catch (error) {}
                }}
            />
        </PaddedDiv>
    );
};

function convertStringToSol(solString: string, maxSol: number) {
    const regexp = /^[0-9]+$/;
    var sol: number | undefined;
    if (solString === "") {
        sol = undefined;
    } else if (regexp.test(solString)) {
        sol = Number(solString);
        if (sol > maxSol) {
            sol = maxSol;
            solString = maxSol.toString();
        }
    } else {
        throw Error("String is not a valid integer");
    }
    return sol;
}
