import React from "react";
import { CameraDropDownFC } from "./CameraDropDownFC";
import { RoverDropDownFC } from "./RoverDropDownFC";
import { SolInputFC } from "./SolInputFC";

export const DataEntryFC: React.FC = () => {
  return (
    <>
      <RoverDropDownFC />
      <CameraDropDownFC />
      <SolInputFC />
    </>
  );
};
