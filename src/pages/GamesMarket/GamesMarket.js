import React from "react";
import InteractiveProject from "../../components/InteractiveProject/InteractiveProject";
import { gmHome } from "../../assets/images/gamesMarket/index";
import homeMap from "../../components/GamesMarket/GamesMarketImage/Maps/homeMap";
import { Container, SectionsContainer, InteractiveProjectAlert } from "./Styles";
import {
  WhatTheProjectAboutDesc,
  WhatTheProjectAboutTitle,
} from "../../components/GeneralSections/WhatTheProjectAbout/index";
import TechUsed from "../../components/GamesMarket/GamesMarketProject/TechUsed";
import { GitRepoDesc, GitRepoTitle } from "../../components/GeneralSections/GitRepo/index";
import getGamesMarketNewPage from "../../services/gamesMarket/getGamesMarketNewPage";

const GamesMarket = () => {
  return (
    <Container>
      <InteractiveProject
        defaultPageInfo={{
          image: gmHome,
          areaName: "home",
          map: homeMap,
        }}
        getNewPage={getGamesMarketNewPage}
      />
      <InteractiveProjectAlert>
        You can interact with the image above, just a little way to take a quick look at the project
      </InteractiveProjectAlert>
      <SectionsContainer>
        <WhatTheProjectAboutTitle />
        <WhatTheProjectAboutDesc
          description="I wanted to do a fullstack project with a different backend arch, I learned about clean arch and applied it.
          I intented to do something like Steam, G2A, Kinguin etc. On the proccess I evolved a lot my backend skills by trying different approaches
          and spending a lot of time arguing with myself how to do something in the 'best' way.
          It was a pretty difficult project but very fun to do."
        />
      </SectionsContainer>
      <TechUsed />
      <SectionsContainer>
        <GitRepoTitle />
        <GitRepoDesc linkGit="https://github.com/nooek/games-market" />
      </SectionsContainer>
    </Container>
  );
};

export default GamesMarket;
