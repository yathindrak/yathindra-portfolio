import styled from "styled-components";
import Box from "../common/box";
import Row from "../common/row";
import { FiMenu } from "react-icons/fi";

const NavContainer = styled(Row)`
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled(Row)`
  justify-content: space-between;
  width: 50%;
  margin-top: 1rem;
  @media screen and (max-width: 1100px) {
    width: 70%;
  }
`;

const MenuItem = styled(Row)`
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: 1rem;
  font-weight: 600;
  &:hover {
    color: #0070f3;
    transition: all 0.3s;
  }
`;

const MobileNavTriggerContainer = styled(Row)`
  margin-top: 2rem;
  width: 100%;
  justify-content: right;
`;

const MobileNavContainer = styled(Row)`
  width: 95%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavTriggerItem = styled(Box)`
  display: block;
  height: 3rem;
  cursor: pointer;
`;

const MobileNavTrigger: React.FC = () => {
  return (
    <MobileNavTriggerItem>
      <FiMenu size={28} />
    </MobileNavTriggerItem>
  );
};

export const NavBar: React.FC = () => {
  return (
    <>
      <NavContainer>
        <Menu>
          <MenuItem>Who am I</MenuItem>
          <MenuItem>See My Work</MenuItem>
          <MenuItem>Let&rsquo;s talk</MenuItem>
        </Menu>
      </NavContainer>

      <MobileNavContainer>
        <MobileNavTriggerContainer>
          <MobileNavTrigger>ABC</MobileNavTrigger>
        </MobileNavTriggerContainer>
      </MobileNavContainer>
    </>
  );
};
