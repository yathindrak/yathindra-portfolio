import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import Box from "../common/box";
import Container from "../common/container";
import Row from "../common/row";

const HeroImageSection = styled(Row)`
  background-image: url("profile-photo.png");
  background-size: cover;
  background-repeat: no-repeat;
  // clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  width: 22rem;
  height: 22rem;
  position: absolute;
  top: 26%;
  right: 20%;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgb(0 0 0 / 25%);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeroDescriptionTitleContainer = styled(Box)`
  margin-top: 36vh;
  margin-left: 4rem;
  font-size: 4rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 3rem;
  }
`;

const HeroDescriptionSubTitleContainer = styled(Box)`
  margin-left: 4rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  color: #666464;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-top: 3rem;
  }
`;

const HeroDescriptionSection = styled(Box)`
  height: 100vh;
  width: 50%;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    height: 50vh;
  }
`;

const HeroDescriptionTitleText = styled.span`
  text-transform: uppercase;
  color: purple;
`;

const HeroDescriptionTitleSubText = styled.span`
  color: #000;
  -webkit-text-stroke: 1px #000;
  display: block;
`;

const HeroImageContainer = styled(Box)`
  height: 100vh;
  width: 50%;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

interface NavBarProps {
  mainTitleText: string;
  mainTitleSubText: string;
  subtitleText: string;
}

export const HeroSection: React.FC<NavBarProps> = ({
  mainTitleText,
  mainTitleSubText,
  subtitleText,
}) => {
  return (
    <Container>
      <HeroDescriptionSection>
        <HeroDescriptionTitleContainer>
          <HeroDescriptionTitleText>{mainTitleText}</HeroDescriptionTitleText>
          <HeroDescriptionTitleSubText>
            {mainTitleSubText}
          </HeroDescriptionTitleSubText>
        </HeroDescriptionTitleContainer>
        <HeroDescriptionSubTitleContainer>
          {subtitleText}
        </HeroDescriptionSubTitleContainer>
        <div>
          <GrClose size={10} />
        </div>
      </HeroDescriptionSection>
      <HeroImageContainer>
        <HeroImageSection />
      </HeroImageContainer>
    </Container>
  );
};
