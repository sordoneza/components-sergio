import React from "react";
import Input from ".";

export default {
  title: "Input",
  component: Input,
  parameters: {
    info: {
      inline: true
    }
  }
};

export const defaultInput = () => <Input name="nombre" />;

export const invalidInput = () => <Input name="nombre" error="Requerido" />;

export const withLabelInput = () => (
  <Input name="nombre" label="Nombre"></Input>
);
