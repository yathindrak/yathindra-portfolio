import Image from "next/image";
import styled from "styled-components";
import Box from "../common/box";
import Container from "../common/container";
import Row from "../common/row";
import mountains from "../../../public/abc.jpeg";

const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const PortfolioMenuContainer = styled(Row)`
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 3rem;
`;

const PortfolioMenuItem = styled(Box)`
  margin-left: 4rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

const PortfolioCardsContainer = styled(Row)`
  justify-content: space-between;
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
  width: 23%;
  background-color: salmon;
  margin-bottom: 1rem;
  position: relative;
  &:hover ${PortfolioCardOverlayContainer} {
    opacity: 1;
    color: #fff;
  }
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
    <PortfolioContainer>
      <PortfolioMenuContainer>
        <PortfolioMenuItem>All</PortfolioMenuItem>
        <PortfolioMenuItem>Design</PortfolioMenuItem>
        <PortfolioMenuItem>Concept</PortfolioMenuItem>
        <PortfolioMenuItem>Development</PortfolioMenuItem>
      </PortfolioMenuContainer>

      <PortfolioCardsContainer>
        <PortfolioCardContainer>
          <Image
            src={mountains}
            width={500}
            height={500}
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

        <PortfolioCardContainer>
          <Image
            src={mountains}
            width={500}
            height={500}
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

        <PortfolioCardContainer>
          <Image
            src={mountains}
            width={500}
            height={500}
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

        <PortfolioCardContainer>
          <Image
            src={mountains}
            width={500}
            height={500}
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

        <PortfolioCardContainer>
          <Image
            src={mountains}
            width={500}
            height={500}
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
        
      </PortfolioCardsContainer>
    </PortfolioContainer>
  );
};
