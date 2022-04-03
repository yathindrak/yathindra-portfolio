import styled from "styled-components";
import Box from "../common/box";
import Row from "../common/row";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";

interface NavContainerProps {
  readonly isScrolledDown: boolean;
}

const NavContainer = styled(Row)<NavContainerProps>`
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 999;
  background: ${(props) => (props.isScrolledDown ? "white" : "transparent")};
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
  font-weight: 400;
  &:hover {
    color: purple;
    transition: all 0.3s;
  }
`;

const MobileNavTriggerContainer = styled(Row)`
  margin-top: 2rem;
  width: 100%;
  justify-content: right;
`;

const MobileNavContainer = styled(Box)`
  display: flex;
  flex-direction: column;
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

const MobileNavDropdownContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const MobileNavDropdownItem = styled(Row)`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-size: 1.4rem;
  margin: 1rem 0 1.4rem 1.4rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 500;
  &:hover {
    color: purple;
    transition: all 0.3s;
  }
`;

interface NavBarProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
}

const MobileNavTrigger: React.FC<NavBarProps> = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}) => {
  return (
    <MobileNavTriggerItem onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
      {isMobileNavOpen ? <GrClose size={28} /> : <FiMenu size={28} />}
    </MobileNavTriggerItem>
  );
};

export const NavBar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolledDown(window.pageYOffset > 100)
      );
    }
  }, []);

  return (
    <>
      <NavContainer isScrolledDown={isScrolledDown}>
        <Menu>
          <MenuItem>Who am I</MenuItem>
          <MenuItem>See My Work</MenuItem>
          <MenuItem>Let&rsquo;s talk</MenuItem>
        </Menu>
      </NavContainer>

      <MobileNavContainer>
        <MobileNavTriggerContainer>
          <MobileNavTrigger
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
        </MobileNavTriggerContainer>
        {isMobileNavOpen && (
          <MobileNavDropdownContainer>
            <MobileNavDropdownItem>Who am I</MobileNavDropdownItem>
            <MobileNavDropdownItem>See My Work</MobileNavDropdownItem>
            <MobileNavDropdownItem>Let&rsquo;s talk</MobileNavDropdownItem>
          </MobileNavDropdownContainer>
        )}
      </MobileNavContainer>
    </>
  );
};
