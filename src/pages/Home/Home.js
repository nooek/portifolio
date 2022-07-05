import React from "react";
import { useNavigate } from "react-router-dom"
import { 
  Container,
  MyProjects,
  AboutMe,
  Title
} from "./Styles";

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <MyProjects onClick={() => navigate("/projects")}>
        <Title>My Projects</Title>
      </MyProjects>
      <AboutMe>
        <Title>About Me</Title>
      </AboutMe>
    </Container>
  );
};

export default Home;
