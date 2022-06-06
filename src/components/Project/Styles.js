import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: auto;
  display: flex;
  flex-direction: ${(props) => (props.closed ? "column" : "row")};
  align-items: ${(props) => (props.closed ? "center" : "none")};
  justify-content: ${(props) => (props.closed ? "space-between" : "none")};
  border-bottom: 3px solid white;
  position: relative;
  margin-top: 50px;
`;

export const ImagesContainer = styled.div`
  width: ${(props) => (props.closed ? "100%" : "60%")};
  height: 100%;
  border: 2px solid blue;
`;

export const Images = styled(motion.img)`
  width: 50%;
  height: 100%;
  object-fit: contain;
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
  /* border-left: ${(props) => (props.closed ? "none" : "2px solid white")}; */
`;

export const DescriptionContentContainer = styled.div`
  width: ${(props) => (props.closed ? "0%" : "100%")};
  height: 95%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  overflow: hidden;
`;

export const DescriptionTitle = styled(motion.h2)`
  color: white;
  font-size: 34px;
  text-align: left;
  font-family: "Roboto", "Sans-serif";
  margin-left: 20px;
`;

export const Description = styled(motion.h2)`
  color: white;
  font-size: 25px;
  text-align: left;
  font-family: "Roboto", "Sans-serif";
  margin-left: 25px;
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
  position: ${(props) => (props.closed ? "absolute" : "relative")};
  bottom: 0;
  &:hover {
    animation: ${closeAnimation} 0.2s linear;
    animation-fill-mode: forwards;  
    z-index: 2;
  }
`;
