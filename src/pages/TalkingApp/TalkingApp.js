import React from "react";
import InteractiveProject from "../../components/InteractiveProject/InteractiveProject";
import { taHome } from "../../assets/images/talkingApp/index";
import { homeMap } from "../../components/TalkingApp/TalkingAppImage/Maps/index";
import { Container, SectionsContainer, InteractiveProjectAlert } from "./Styles";
import {
  WhatTheProjectAboutDesc,
  WhatTheProjectAboutTitle,
} from "../../components/GeneralSections/WhatTheProjectAbout/index";
import TechUsed from "../../components/TalkingApp/TalkingAppProject/TechUsed";
import { GitRepoDesc, GitRepoTitle } from "../../components/GeneralSections/GitRepo/index";
import getTalkingAppNewPage from "../../services/talkingApp/getTalkingAppNewPage";
import message from "../message"

const TalkingApp = () => {
  return (
    <Container>
      <InteractiveProject
        defaultPageInfo={{
          image: taHome,
          areaName: "home",
          map: homeMap,
        }}
        getNewPage={getTalkingAppNewPage}
      />
      <InteractiveProjectAlert>
        { message }
      </InteractiveProjectAlert>
      <SectionsContainer>
        <WhatTheProjectAboutTitle />
        <WhatTheProjectAboutDesc
          description="I was testing SocketIo, a library used to pass real-time info between the server and client. I decided to do a basic project of a messager sender, but then I decided to take the project to other level and implement accounts, decent interface, 
          friendship system etc. It was a pretty fun project, learned a lot about the server side of an application."
        />
      </SectionsContainer>
      <TechUsed />
      <SectionsContainer>
        <GitRepoTitle />
        <GitRepoDesc linkGit="https://github.com/nooek/talking-app" />
      </SectionsContainer>
    </Container>
  );
};

export default TalkingApp;
