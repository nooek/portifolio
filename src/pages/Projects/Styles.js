import styled from "styled-components"
import { motion } from "framer-motion"

export const Header = styled.div `
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled(motion.h2) `
  color: white;
  font-size: 60px;
  text-align: center;
  font-family: 'Roboto', 'Sans-serif';
`

export const ProjectsContainer = styled.div `
  width: 100%;
  height: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:first-child ${ProjectsContainer} {
    margin-top: 00px;
  }
`
