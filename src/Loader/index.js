// @flow
import React from "react";
import LoaderSpinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { withTheme } from "styled-components";

type Props = {
  type?: String,
  size?: Number,
  loading: boolean,
  theme: { [x: string]: any }
};

const Loader = ({ type, size, loading, theme }: Props) => {
  return (
    <LoaderSpinner
      type={type}
      color={theme.color.gray}
      height={size}
      width={size}
      visible={loading}
    />
  );
};

Loader.defaultProps = {
  loading: true,
  type: "Oval",
  size: 50
};

export default withTheme(Loader);
