import styled from "styled-components";
import Box from "../box";

export const FormGroupSm = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5em;
  background: papayawhip;
  background: #f0f0f0;
  border: 0;
  width: 100%;
  transition: box-shadow 0.3s;
  margin-bottom: 0.5em;
  padding: 1.5rem;
  margin-top: 1rem;
  &:focus {
    box-shadow: inset 0 -1px 0 #222;
    // removes default blue outline
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  font-size: 1.2rem;
  padding: 0.5em;
  background: papayawhip;
  background: #f0f0f0;
  border: 0;
  width: 100%;
  height: 8rem;
  transition: box-shadow 0.3s;
  margin-bottom: 0.5em;
  padding: 1.5rem;
  margin-top: 1rem;
  &:focus {
    box-shadow: inset 0 -1px 0 #222;
    // removes default blue outline
    outline: none;
  }
`;

export const ErrorMessage = styled.label`
  margin-bottom: 0.5em;
  color: #f41606;
  height: 1rem;
`;
