import styled, { keyframes } from "styled-components"

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const sectionsAnimation = keyframes `
  0% { width: 50%; }
  100% { width: 55%; }
`

export const MyProjects = styled.div `
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(360deg, rgb(51, 5, 6), rgb(128, 18, 20), rgb(209, 19, 22));
  cursor: pointer;
  border: 4px solid black;
  &:hover {
    position: absolute;
    animation: ${sectionsAnimation} 0.2s linear;
    animation-fill-mode: forwards;  
    left: 0; 
    z-index: 2;
  }
`

export const AboutMe = styled.div `
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(360deg, rgb(18, 11, 77), rgb(19, 26, 158), rgb(16, 60, 222));
  position: absolute;
  right: 0;
  cursor: pointer;
  border: 4px solid black;
  &:hover {
    position: absolute;
    right: 0;
    animation: ${sectionsAnimation} 0.2s linear;
    animation-fill-mode: forwards;  
    z-index: 2;
  }
`

export const Title = styled.h2 `
  font-size: 4vw;
  text-align: center;
  color: white;
  font-family: 'Rajdhani', 'Sans-serif';
`

export const Header = styled.div `
  width: 100%;
  height: auto;
  text-align: center;
  border: 2px solid white;
  position: absolute;
  top: 0;
`

