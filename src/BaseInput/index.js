import React from "react";
import styled from "styled-components";
import FormText from "../FormText";
import { FaExclamationCircle } from "react-icons/fa";

export type BaseInputProps = {
  name: string,
  type: string,
  error?: string
};

type Props = {
  header?: any
} & BaseInputProps;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 7px;
  }
`;

const WrapperInput = styled.div`
  border: 1px solid;
  border-radius: 5px;
  border-color: ${props =>
    props.invalid ? props.theme.color.red : props.theme.color.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  padding: 5px;
  width: 100%;
`;

const BaseInput = ({ name, type, error, header }: Props) => {
  return (
    <ContainerInput>
      {header}
      <WrapperInput invalid={!!error}>
        <StyledInput id={name} name={name} type={type} invalid={!!error} />
        {error && <FaExclamationCircle color="red" />}
      </WrapperInput>
      {error && <FormText color="red">{error}</FormText>}
    </ContainerInput>
  );
};

BaseInput.defaultProps = {
  type: "text"
};

export default BaseInput;
