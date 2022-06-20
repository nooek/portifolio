import React from "react";
import { Container, SectionsContainer, InteractiveProjectAlert } from "./Styles";
import InteractiveProject from "../../components/InteractiveProject/InteractiveProject";
import FlashcardImage from "../../components/Flashcard/FlashcardImage/FlashcardImage"
import TechUsed from "../../components/Flashcard/FlashcardProject/TechUsed";
import {
  WhatTheProjectAboutDesc,
  WhatTheProjectAboutTitle,
} from "../../components/GeneralSections/WhatTheProjectAbout/index";
import { GitRepoDesc, GitRepoTitle } from "../../components/GeneralSections/GitRepo/index";
import { flashcardHome } from "../../assets/images/flashcard/index"
import { homeMap } from "../../components/Flashcard/FlashcardImage/Maps/HomeMap"

const Flashcard = () => {
  return (
    <Container>
      <InteractiveProject 
        ImageComponent={FlashcardImage}
        defaultPageInfo={{
          image: flashcardHome,
          areaName: 'home',
          map: homeMap
        }}
      />
      <InteractiveProjectAlert>
        You can interact with the image above, just a little way to take a quick look at the project
      </InteractiveProjectAlert>
      <SectionsContainer>
        <WhatTheProjectAboutTitle />
        <WhatTheProjectAboutDesc
          description="In my path of learning Russian I came across an app called Anki, it's a very common used app
        to learn vocabulary, and it really works, after months revising and adding new words every
        day my vocabulary improved and I could remember almost every word. So I decided to build
        this project, it is completely inspired in Anki's idea of creating decks with cards and
        studying with them."
        />
      </SectionsContainer>
      <TechUsed />
      <SectionsContainer>
        <GitRepoTitle />
        <GitRepoDesc linkGit="https://github.com/nooek/flashcard" />
      </SectionsContainer>
    </Container>
  );
};

export default Flashcard;
