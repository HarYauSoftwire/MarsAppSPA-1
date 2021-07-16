import React from "react";
import { DropDownSelect } from "../Styles/DropDown";

type DropDownProps = {
    options: {
        value: any;
        label: string;
    }[];
    onSelect: (x: any) => void;
};

export const DropDownFC: React.FC<DropDownProps> = ({ options, onSelect }) => {
    return (
        <DropDownSelect
            className="dropDownSelect"
            options={options}
            onChange={(
                selectedOption: {
                    value: any;
                    label: string;
                } | null
            ) => onSelect(selectedOption ? selectedOption.value : "")}
        />
    );
};
