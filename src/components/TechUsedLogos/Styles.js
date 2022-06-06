import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionsTechLogoDescription = styled(motion.h2) `
  font-size: 23px;
  color: white;
  font-family: 'Inter', sans-serif;
  margin-left: 25px;
`

export const SectionsTechsLogosContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content
  border: 2px solid yellow;
  flex-wrap: wrap;
  overflow: hidden;
  @media(max-width: 960px) {
    height: auto;
    flex-direction: column;
  }
`;

export const SectionsTechLogoContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SectionsTechsLogos = styled(motion.img)`
  width: auto;
  height: 90px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
