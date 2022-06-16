import React from "react";
import InteractiveProject from "../../components/InteractiveProject/InteractiveProject";
import GamesMarketImage from "../../components/GamesMarket/GamesMarketImage/GamesMarketImage";
import { gmHome } from "../../assets/images/gamesMarket/index";
import { Container } from "../Flashcard/Styles";
import homeMap from "../../components/GamesMarket/GamesMarketImage/Maps/homeMap";

const GamesMarket = () => {
  return (
    <Container>
      <InteractiveProject
        ImageComponent={GamesMarketImage}
        defaultPageInfo={{
          image: gmHome,
          areaName: "home",
          map: homeMap,
        }}
      />
    </Container>
  );
};

export default GamesMarket;
