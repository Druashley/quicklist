import React from "react";
import { StyledError } from "./styles/Error.style";

interface Props {
  label: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Error: React.FC<Props> = ({ label, setError }) => {
  return (
    <StyledError>
      <div>{label}</div>
      <button onClick={() => setError(false)}>X</button>
    </StyledError>
  );
};

export default Error;
