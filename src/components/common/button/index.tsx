import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: purple;
  border: none;
  color: #fff;
  width: fit-content;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  letter-spacing: 0.05rem;
  &:hover {
    background: #000000;
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }
`;

export const PrimaryButtonNotAllowed = styled(PrimaryButton)`
  background-color: #ccc;
  cursor: not-allowed;
  &:hover {
    background: #ccc;
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }
`;
