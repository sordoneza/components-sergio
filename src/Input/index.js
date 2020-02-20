// @flow
import React from "react";
import BaseInput from "../BaseInput";
import Label from "../Label";

// @types
import type { BaseInputProps } from "../BaseInput";

type Props = {
  label?: string
} & BaseInputProps;

const Input = ({ name, type, error, label }: Props) => {
  const Header = () => {
    return <Label htmlFor={name}>{label}</Label>;
  };

  return (
    <BaseInput
      name={name}
      type={type}
      error={error}
      header={label && <Header />}
    />
  );
};

export default Input;
