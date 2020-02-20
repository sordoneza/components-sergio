import React from "react";
import styled from "styled-components";
import classnames from "classnames";

type Props = {
  className?: string,
  color?: string,
  [x: string]: any
};

const StyledLabel = styled.label`
  color: ${props => props.theme.color.gray};
  &.red {
    color: ${props => props.theme.color.red};
  }
`;

const Label = ({ className, color, ...rest }: Props) => {
  console.log({ ...rest });
  const labelClass = classnames({ [`${color}`]: color }, className);
  return <StyledLabel className={labelClass} {...rest} />;
};

export default Label;
