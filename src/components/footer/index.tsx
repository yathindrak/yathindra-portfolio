import React from "react";
import styled from "styled-components";
import Box from "../common/box";
import Row from "../common/row";

export const FooterContainer = styled(Row)`
  background-color: purple;
  width: 100%;
  justify-content: center;
  padding: 1.5rem;
  position: relative;
  background: #ffff;
  width: 100%;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer style={{ backgroundColor: "purple" }}>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "#FFFF" }}> © Yathindra Kodithuwakku 2022</span>
        <a
          style={{ fontSize: "0.6rem", color: "#FFFF", marginTop: "1rem" }}
          href="https://www.freepik.com/photos/texture"
        >
          Texture photo created by freepik - www.freepik.com
        </a>
      </Box>
    </FooterContainer>
  );
};
