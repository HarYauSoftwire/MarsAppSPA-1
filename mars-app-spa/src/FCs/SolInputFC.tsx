import React, { useContext, useState } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import "../Styles/SolInput.css";
export const SolInputFC: React.FC = () => {
    const [inputStr, setInputStr] = useState("");
    const programContext = useContext(selectedRoverContext);
    const maxSol: number = programContext.rover
        ? programContext.rover.max_sol
        : 0;

    return (
        <>
            <p>Martian days since landing:</p>
            <input
                className="solInputBox"
                type="text"
                value={inputStr}
                onChange={(e) => {
                    const regexp = /^0*(0|[1-9][0-9]*)$/;
                    let newStr = e.target.value;
                    if (newStr === "") {
                        setInputStr("");
                        programContext.setSol(undefined);
                    }
                    else if (regexp.test(newStr)) {
                        let value = Number(newStr);
                        if (value > maxSol) {
                            value = maxSol;
                            newStr = maxSol.toString();
                        }
                        setInputStr(newStr.replace(regexp, "$1"));
                        programContext.setSol(value);
                    }
                }}
            />
        </>
    );
};
