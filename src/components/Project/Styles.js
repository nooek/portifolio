import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: auto;
  display: flex;
  flex-direction: ${(props) => (props.closedimg ? "column" : "row")};
  align-items: ${(props) => (props.closedimg ? "center" : "none")};
  justify-content: ${(props) => (props.closedimg ? "space-between" : "none")};
  border-bottom: 3px solid white;
  position: relative;
  margin-top: 50px;
  @media(max-width: 680px) {
    flex-direction: column;
    align-items: center;
    min-height: auto;
  }
`;

export const ImagesContainer = styled.div`
  width: ${(props) => (props.closedimg ? "100%" : "50%")};
  height: 100%;
  @media(max-width: 680px) {
    width: 100%;
  }
`;

export const Images = styled(motion.img)`
  object-fit: contain;
  @media(max-width: 680px) {
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  word-break: break-word;
  overflow: hidden;
  @media(max-width: 680px) {
    width: 100%;
    height: auto;
    align-items: left;
    overflow: visible;
    flex-wrap: nowrap;
    word-break: break-all;
  }
`;

export const DescriptionContentContainer = styled.div`
  width: ${(props) => (props.closedimg ? "0%" : "100%")};
  height: 95%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  overflow: hidden;
  @media(max-width: 680px) {
    width: 90%;
    height: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    word-break: break-all;
  }
`;

export const DescriptionTitle = styled(motion.h2)`
  color: white;
  font-size: 34px;
  text-align: left;
  font-family: "Roboto", "Sans-serif";
  margin-left: 20px;
  @media(max-width: 680px) {
    margin-left: 0px;
    font-size: 25px;
  }
`;

export const Description = styled(motion.h2)`
  color: white;
  font-size: 25px;
  text-align: left;
  font-family: "Roboto", "Sans-serif";
  margin-left: 25px;
  @media(max-width: 750px) {
    font-size: 3vw;
  }
  @media(max-width: 680px) {
    margin-left: 0px;
    font-size: 15px;
  }
`;

export const MoreInfoButton = styled(motion.button) `
  width: 250px;
  height: 50px;
  margin-left: 25px;
  font-size: 21px;
  color: white;
  cursor: pointer;
  background: linear-gradient(90deg, rgb(4, 89, 7), rgb(3, 115, 7), rgb(3, 133, 7));
  &:hover {
    transform: scale(1.02);
  }
  @media(max-width: 750px) {
    width: 40%;
    font-size: 3vw;
  }
  @media(max-width: 680px) {
    width: 100%;
    height: 20px;
    font-size: 20px;
    font-size: 1.5vmax;
    margin-left: 0px;
  }
`

const closeAnimation = keyframes `
  0% { width: 30%; }
  100% { width: 100%; }
`

export const CloseDescription = styled.button`
  width: 30%;
  height: 5%;
  background: linear-gradient(90deg, rgb(4, 89, 7), rgb(3, 115, 7), rgb(3, 133, 7));
  color: white;
  font-size: 15px;
  position: ${(props) => (props.closedimg ? "absolute" : "relative")};
  bottom: 0;
  &:hover {
    animation: ${closeAnimation} 0.4s linear;
    animation-fill-mode: forwards;  
    z-index: 2;
  }
  @media(max-width: 680px) {
    display: none;
  }
`;
