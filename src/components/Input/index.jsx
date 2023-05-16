import React from "react";
import { ContainerInput } from "./styles";

function Input({ label, type, name, value, onChange,error,onBlur }) {
  return (
    <ContainerInput>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </ContainerInput>
  );
}

export default Input;
