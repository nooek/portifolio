import React from "react";
import {
  Container,
  SectionsContainer,
  SectionsNameContainer,
  SectionsName,
  SectionsDescriptionContainer,
  SectionsDescription,
  InteractiveProjectAlert
} from "./Styles";
import InteractiveProject from "../../components/Flashcard/FlashcardProject/InteractiveProject";
import TechUsed from "../../components/Flashcard/FlashcardProject/TechUsed";

const GamesMarket = () => {
  return (
    <Container>
      <InteractiveProject />
      <InteractiveProjectAlert>You can interect with the image above, just a little way to take a quick look at the project</InteractiveProjectAlert>
      <SectionsContainer>
        <SectionsNameContainer>
          <SectionsName>What is the project about?</SectionsName>
        </SectionsNameContainer>
        <SectionsDescriptionContainer>
          <SectionsDescription>
            In my path of learning Russian I came across an app called Anki, it's a very common used
            app to learn vocabulary, and it really works, after months revising and adding new words
            every day my vocabulary improved and I could remember almost every word. So I decided to
            build this project, it is completely inspired in Anki's idea of creating decks with
            cards and studying with them.
          </SectionsDescription>
        </SectionsDescriptionContainer>
      </SectionsContainer>
      <TechUsed />
      <SectionsNameContainer>
        <SectionsName>Github Repository</SectionsName>
      </SectionsNameContainer>
      <SectionsDescriptionContainer>
        <SectionsDescription type="link">
          <a 
            href="https://github.com/nooek/flashcard" 
            target="_blank" 
            rel="noreferrer noopener" 
            style={{ color: "white" }}
          >
            Click here
          </a>
        </SectionsDescription>
      </SectionsDescriptionContainer>
    </Container>
  );
};

export default GamesMarket;
