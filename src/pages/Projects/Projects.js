import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Header, Title, ProjectsContainer } from "./Styles";
import { gamesMarketHome } from "../../assets/images/gamesMarket/index";
import { talkingAppHome } from "../../assets/images/talkingApp/index";
import { flashcardHome } from "../../assets/images/flashcard/index"
import Project from "../../components/Project/Project";

const Projects = () => {
  const controlTitle = useAnimation();
  const [titleRef, titleInView] = useInView();

  const titleAnimation = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0, x: 100 },
  };

  useEffect(() => {
    if (titleInView) {
      controlTitle.start("visible");
    }
  }, [titleInView, controlTitle]);

  return (
    <Container>
      <Header>
        <Title ref={titleRef} variants={titleAnimation} initial="hidden" animate={controlTitle}>
          My Projects
        </Title>
      </Header>
      <ProjectsContainer>
        <Project
          name="Games Market"
          images={gamesMarketHome}
          desc="It is a games market was build based on Steam, 
          G2A and other sites. You can publish and download games, 
          as well as comment about them and rate them."
          route="/gamesmarket"
        />
        <Project
          name="Talking app"
          images={talkingAppHome}
          desc="I was testing SocketIo, a library used to pass real-time
          info between the server and client. I decided to do a basic project of
          a messager sender, but then I decided to take the project to other level and implement accounts,
          decent interface, friendship system etc."
          route="/talkingapp"
        />

        <Project
          name="Flashcards"
          images={flashcardHome}
          desc="It is a flashcards site, my main inspiration was anki. The point of the app
          is to make study easier. Creating, liking and using others decks are parts of the app."
          route="/flashcard"
        />
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
