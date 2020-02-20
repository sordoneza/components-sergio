// @flow
import React, { useState } from "react";
import BaseInput from "../BaseInput";
import Label from "../Label";
import styled from "styled-components";

// @types
import type { BaseInputProps } from "../BaseInput";

type Props = {
  label?: string,
  showPassword?: boolean
} & BaseInputProps;

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.a`
  color: ${props => props.theme.color.gray};
  text-decoration: underline;
`;

const PasswordField = ({ name, label, error, showPassword }: Props) => {
  const [visible, setVisible] = useState(false);

  const inputType = visible ? "text" : "password";

  const onClick = () => {
    setVisible(!visible);
  };

  const Header = () => {
    return (
      <WrapperHeader>
        {label && <Label htmlFor={name}>{label}</Label>}
        {showPassword && (
          <StyledButton onClick={onClick}>
            {visible ? "Ocultar" : "Mostrar"}
          </StyledButton>
        )}
      </WrapperHeader>
    );
  };

  return (
    <BaseInput name={name} type={inputType} error={error} header={<Header />} />
  );
};

PasswordField.defaultProps = {
  showPassword: false
};

export default PasswordField;
