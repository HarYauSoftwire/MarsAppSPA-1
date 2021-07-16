import React, { useContext, useState } from "react";
import { selectedRoverContext } from "../selectedRoverContext";
import { SolInputBox } from "../Styles/SolInput";

export const SolInputFC: React.FC = () => {
    const [inputStr, setInputStr] = useState("");
    const { rover, manifest, setSolPhoto, setSol } =
        useContext(selectedRoverContext);
    const maxSol: number = rover ? rover.max_sol : 0;

    return (
        <>
            {manifest && (
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
                                setSol(undefined);
                            } else if (regexp.test(newStr)) {
                                let sol = Number(newStr);
                                if (sol > maxSol) {
                                    sol = maxSol;
                                    newStr = maxSol.toString();
                                }
                                setInputStr(newStr.replace(regexp, "$1"));
                                setSol(sol);

                                setSolPhoto(
                                    manifest.photos.find(
                                        (solPhoto) => solPhoto.sol === sol
                                    )
                                );
                            }
                        }}
                    />
                </div>
            )}
        </>
    );
};
