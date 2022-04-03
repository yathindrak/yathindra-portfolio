import React, { MouseEvent, useState } from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import Box from "../common/box";
import { PrimaryButton, PrimaryButtonNotAllowed } from "../common/button";
import Container from "../common/container";
import {
  Label,
  Input,
  ErrorMessage,
  FormGroupSm,
  TextArea,
} from "../common/form";
import Row from "../common/row";

const ContactSubTitleText = styled(Box)`
  // margin-left: 4rem;
  // margin-top: 2rem;
  font-size: 1.5rem;
  color: #666464;
  @media screen and (max-width: 768px) {
    margin: 2rem auto;
    text-align: center;
  }
`;

const ContactTitleText = styled.span`
  font-size: 2rem;
  color: #666464;
  font-weight: 600;
  text-transform: uppercase;
  color: purple;
  margin-left: 4rem;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

const FormContainer = styled(Box)`
  margin-left: 4rem;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

export const FooterContainer = styled(Row)`
  background-color: purple;
  width: 100%;
  justify-content: center;
  padding: 1.5rem;
  margin-top: 3rem;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer style={{ backgroundColor: "purple" }}>
      <Box style={{ display: "flex", flexDirection: "column" }} >
      <span style={{ color: "#FFFF" }}> © Yathindra Kodithuwakku 2022</span>
      <a style={{fontSize: "0.6rem", color: "#FFFF", marginTop: "1rem"}} href='https://www.freepik.com/photos/texture'>Texture photo created by freepik - www.freepik.com</a>
      </Box>
    </FooterContainer>
  );
};
