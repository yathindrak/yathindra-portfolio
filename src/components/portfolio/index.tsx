import Image from "next/image";
import styled from "styled-components";
import Box from "../common/box";
import Container from "../common/container";
import Row from "../common/row";
import adapttextImage from "../../../public/adaptext.png";

const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const PortfolioMenuContainer = styled(Row)`
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PortfolioMenuItem = styled(Box)`
  margin-left: 4rem;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #0070f3;
    transition: all 0.3s;
  }
`;

const PortfolioMobileTitle = styled(Box)`
  align-self: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

interface PortfolioCardsContainerProps {
  // space evenly when only two cards are available
  readonly shouldSpaceEvenly: boolean;
}

const PortfolioCardsContainer = styled(Row)<PortfolioCardsContainerProps>`
  justify-content: ${(props) =>
    props.shouldSpaceEvenly ? "space-evenly" : "space-between"};
  flex-wrap: wrap;
`;

const PortfolioCardOverlayContainer = styled(Row)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const PortfolioCardContainer = styled(Row)`
  position: relative;
  cursor: pointer;
  height: 17rem;
  width: 25rem;
  margin-bottom: 2.5rem;
  &:hover ${PortfolioCardOverlayContainer} {
    opacity: 1;
    color: #fff;
  }
  @media screen and (max-width: 992px) {
    width: calc(50% - 1rem);
    margin-bottom: 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 0;
  } ;
`;

const PortfolioOverlayHeading = styled(Row)`
  font-size: 1.5rem;
`;

const PortfolioOverlayDescription = styled(Row)`
  font-size: 1.3rem;
  margin-top: 1rem;
  color: #c1bbbb;
`;

export const Portfolio: React.FC = ({}) => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioMenuContainer>
        <PortfolioMenuItem>All</PortfolioMenuItem>
        <PortfolioMenuItem>Design</PortfolioMenuItem>
        <PortfolioMenuItem>Concept</PortfolioMenuItem>
        <PortfolioMenuItem>Development</PortfolioMenuItem>
      </PortfolioMenuContainer>
      <PortfolioMobileTitle>My Portfolio</PortfolioMobileTitle>

      <PortfolioCardsContainer shouldSpaceEvenly={true}>
        {[1, 2].map((item, i) => (
          <PortfolioCardContainer key={i}>
            <Image
              src={adapttextImage}
              layout="fill"
              width={200}
              objectFit="contain"
              placeholder="blur"
              alt="Picture of the author"
            />
            <PortfolioCardOverlayContainer>
              <PortfolioOverlayHeading>Title</PortfolioOverlayHeading>
              <PortfolioOverlayDescription>
                Description
              </PortfolioOverlayDescription>
            </PortfolioCardOverlayContainer>
          </PortfolioCardContainer>
        ))}
      </PortfolioCardsContainer>
    </PortfolioContainer>
  );
};
