import React, { useContext, useState } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import { SolInputBox } from "../Styles/SolInput";

export const SolInputFC: React.FC = () => {
    const [inputStr, setInputStr] = useState("");
    const programContext = useContext(selectedRoverContext);
    const maxSol: number = programContext.rover
        ? programContext.rover.max_sol
        : 0;

    return (
        <div>
            <p>Martian days since landing:</p>
            <SolInputBox
                className="solInputBox"
                type="text"
                value={inputStr}
                onChange={(e) => {
                    let newStr = e.target.value;
                    const regexp = /^0*(0|[1-9][0-9]*)$/;
                    if (newStr === "") {
                        setInputStr("");
                        programContext.setSol(undefined);
                    } else if (regexp.test(newStr)) {
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
        </div>
    );
};
