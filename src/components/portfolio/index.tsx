import Image from "next/image";
import styled from "styled-components";
import Box from "../common/box";
import Container from "../common/container";
import Row from "../common/row";
import useContentful, { IPortofolioData } from "../../hooks/useContentful";
import { useEffect, useState } from "react";
import { PROJECT_TYPES } from "../../constants/projectTypes";
import Link from "next/link";

const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ffff;
  width: 100%;
  padding-top: 4rem;
`;

const PortfolioMenuContainer = styled(Row)`
  justify-content: flex-end;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

interface PortfolioMenuItemProps {
  readonly selected: boolean;
}

const PortfolioMenuItem = styled(Box)<PortfolioMenuItemProps>`
  margin-left: 4rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${(props) => (props.selected ? "purple" : "#000")};
  &:hover {
    color: purple;
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
  text-align: center;
`;

export const Portfolio: React.FC = ({}) => {
  const { data, error, fetched, loading } = useContentful();
  const [filteredData, setFilteredData] = useState<IPortofolioData[]>();
  const [switchAllTab, setSwitchAllTab] = useState(false);
  const [switchDesignTab, setSwitchDesignTab] = useState(false);
  const [switchConceptTab, setSwitchConceptTab] = useState(false);
  const [switchDevelopmentTab, setSwitchDevelopmentTab] = useState(false);
  const [selectedTab, setSelectedTab] = useState<PROJECT_TYPES>(
    PROJECT_TYPES.ALL
  );

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (!data) return;

    if (selectedTab === PROJECT_TYPES.ALL) {
      setFilteredData(data);
    } else {
      const selectedData = data.filter((item, i) => {
        if (item?.tag?.includes(selectedTab)) {
          return item;
        }
      });

      setFilteredData(selectedData);
    }
  }, [selectedTab]);

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioMenuContainer>
        <PortfolioMenuItem
          onClick={() => {
            setSelectedTab(PROJECT_TYPES.ALL);
            setSwitchAllTab(true);
            setSwitchDesignTab(false);
            setSwitchConceptTab(false);
            setSwitchDevelopmentTab(false);
          }}
          selected={switchAllTab}
        >
          All
        </PortfolioMenuItem>
        <PortfolioMenuItem
          onClick={() => {
            setSelectedTab(PROJECT_TYPES.DESIGN);
            setSwitchAllTab(false);
            setSwitchDesignTab(true);
            setSwitchConceptTab(false);
            setSwitchDevelopmentTab(false);
          }}
          selected={switchDesignTab}
        >
          Design
        </PortfolioMenuItem>
        <PortfolioMenuItem
          onClick={() => {
            setSelectedTab(PROJECT_TYPES.CONCEPT);
            setSwitchAllTab(false);
            setSwitchDesignTab(false);
            setSwitchConceptTab(true);
            setSwitchDevelopmentTab(false);
          }}
          selected={switchConceptTab}
        >
          Concept
        </PortfolioMenuItem>
        <PortfolioMenuItem
          onClick={() => {
            setSelectedTab(PROJECT_TYPES.DEVELOPMENT);
            setSwitchAllTab(false);
            setSwitchDesignTab(false);
            setSwitchConceptTab(false);
            setSwitchDevelopmentTab(true);
          }}
          selected={switchDevelopmentTab}
        >
          Development
        </PortfolioMenuItem>
      </PortfolioMenuContainer>
      <PortfolioMobileTitle>My Portfolio</PortfolioMobileTitle>

      <PortfolioCardsContainer shouldSpaceEvenly={true}>
        {filteredData
          ? filteredData.map((item, i) => (
              <Link href={item?.url} passHref key={i}>
                <PortfolioCardContainer>
                  <Image
                    src={`https:${item?.image?.fields?.file?.url}`}
                    layout="fill"
                    width={200}
                    objectFit="contain"
                    // placeholder="blur"
                    alt="Picture of the author"
                  />
                  <PortfolioCardOverlayContainer>
                    <PortfolioOverlayHeading>
                      {item?.title}
                    </PortfolioOverlayHeading>
                    <PortfolioOverlayDescription>
                      {item?.description}
                    </PortfolioOverlayDescription>
                  </PortfolioCardOverlayContainer>
                </PortfolioCardContainer>
              </Link>
            ))
          : null}
      </PortfolioCardsContainer>
    </PortfolioContainer>
  );
};
