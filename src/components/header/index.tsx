import styled from "styled-components";
import Box from "../common/box";
import Row from "../common/row";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

interface NavContainerProps {
  readonly isScrolledDown: boolean;
}

interface MobileNavContainerProps {
  readonly isMobileNavOpen: boolean;
}

const NavContainer = styled(Row)<NavContainerProps>`
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
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
  font-weight: 700;
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

const MobileNavContainer = styled(Box)<MobileNavContainerProps>`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: none;
  }
  ${(props) => (props.isMobileNavOpen ? "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);" : "")};
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #ffffff !important;
  z-index: 1000;
  position: relative;
`;

const MobileNavTriggerItem = styled(Box)`
  display: block;
  height: 3rem;
  cursor: pointer;
  margin-right: 1rem;
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
          <Link href="/#" passHref>
            <MenuItem>Who am I</MenuItem>
          </Link>
          <Link href="/#portfolio" passHref>
            <MenuItem>See My Work</MenuItem>
          </Link>
          <Link href="/blog" passHref>
            <MenuItem>Blog</MenuItem>
          </Link>
          <Link href="/#contact" passHref>
            <MenuItem>Let&rsquo;s talk</MenuItem>
          </Link>
        </Menu>
      </NavContainer>

      <MobileNavContainer isMobileNavOpen={isMobileNavOpen}>
        <MobileNavTriggerContainer>
          <MobileNavTrigger
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
        </MobileNavTriggerContainer>
        {isMobileNavOpen && (
          <MobileNavDropdownContainer>
            <Link href="/#" passHref>
              <MobileNavDropdownItem>Who am I</MobileNavDropdownItem>
            </Link>
            <Link href="/#portfolio" passHref>
              <MobileNavDropdownItem>See My Work</MobileNavDropdownItem>
            </Link>
            <Link href="/blog" passHref>
              <MobileNavDropdownItem>Blog</MobileNavDropdownItem>
            </Link>
            <Link href="/#contact" passHref>
              <MobileNavDropdownItem>Let&rsquo;s talk</MobileNavDropdownItem>
            </Link>
          </MobileNavDropdownContainer>
        )}
      </MobileNavContainer>
    </>
  );
};

export default React.memo(NavBar);
