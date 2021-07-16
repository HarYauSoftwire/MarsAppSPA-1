import React from "react";
import { PaddedDiv } from "../Styles/PaddedDiv";
import { SolInputBox } from "../Styles/SolInput";

type SolInputProps = {
    sol?: number;
    setSol: (sol?: number) => void;
    maxSol: number;
};

export const SolInputFC: React.FC<SolInputProps> = ({
    sol,
    setSol,
    maxSol,
}) => {
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
                        setSol(convertStringToSol(solString, maxSol));
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
