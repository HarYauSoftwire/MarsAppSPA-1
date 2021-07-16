import React from "react";
import Select from "react-select";
import "../Styles/dropDownFC.css";

type DropDownProps = {
  options: {
    value: any;
    label: string;
  }[];
  onSelect: (x: any) => void;
};

export const DropDownFC: React.FC<DropDownProps> = ({ options, onSelect }) => {
  return (
    <Select className="dropDownSelect"
      options={options}
      onChange={(selectedOption) =>
        onSelect(selectedOption ? selectedOption.value : "")
      }
    />
  );
};
