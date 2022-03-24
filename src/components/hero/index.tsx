import styled from "styled-components";
import Box from "../common/box";
import Row from "../common/row";

const HeroImageSection = styled(Row)`
  background-image: url(https://images.unsplash.com/photo-1500417148159-68083bd7333a);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  // clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  width: 22rem;
  height: 22rem;
  position: absolute;
  top: 28%;
  right: 20%;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgb(0 0 0 / 25%);
`;

const HeroDescriptionTitleContainer = styled(Box)`
  margin-top: 36vh;
  margin-left: 4rem;
  font-size: 4rem;
`;

const HeroDescriptionSubTitleContainer = styled(Box)`
  margin-left: 4rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  color: #666464;
`;

const HeroDescriptionSection = styled(Box)`
  height: 100vh;
  width: 50%;
  font-weight: 600;
`;

const HeroDescriptionTitleText = styled.span`
  text-transform: uppercase;
`;

const HeroDescriptionTitleSubText = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px #000;
  display: block;
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
    <Row style={{ width: "90%", margin: "auto" }}>
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
      </HeroDescriptionSection>
      <div style={{ height: "100vh", width: "50%", position: "relative" }}>
        <HeroImageSection />
      </div>
    </Row>
  );
};
