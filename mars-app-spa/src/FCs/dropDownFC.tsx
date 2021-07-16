import React from "react";
import { DropDownSelect } from "../Styles/DropDown";

type DropDownProps = {
    options: {
        value: any;
        label: string;
    }[];
    value: any;
    onSelect: (x: any) => void;
};

export const DropDownFC: React.FC<DropDownProps> = ({ options, value, onSelect }) => {
    return (
        <DropDownSelect
            className="dropDownSelect"
            options={options}
            value={value}
            onChange={(
                selectedOption: {
                    value: any;
                    label: string;
                } | null
            ) => onSelect(selectedOption ? selectedOption.value : "")}
        />
    );
};
