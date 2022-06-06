import styled from "styled-components"

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ChangersBtnsContainer = styled.div `
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Middle = styled.div `
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ScrollBtns = styled.button `
  width: 100%;
  margin-bottom: ${props => props.up ? "10px" : "none"};
  margin-top: ${props => props.up ? "none" : "10px"};
`

export const ImagesContainer = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
`

export const SectionsContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left:
  justify-content: space-around;
  margin-top: 80px;
`

export const SectionsNameContainer = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`

export const SectionsName = styled.h2 `
  font-size: 40px;
  color: white;
  font-family: 'Roboto', sans-serif;
  margin-left: 15px;
  @media(max-width: 500px) {
    font-size: 30px;
    margin-left: 10px;
  }
`

export const SectionsDescriptionContainer = styled.div `
  flex: 1;
`

export const SectionsDescription = styled.h2 `
  font-size: 23px;
  color: white;
  font-family: 'Inter', sans-serif;
  margin-left: 25px;
  @media(max-width: 500px) {
    font-size: 20px;
    margin-left: 15px;
  }
`

export const InteractiveProjectAlert = styled.h2 `
  font-size: 20px;
  color: white;
  font-family: 'Inter', sans-serif;
  text-align: center;
`
