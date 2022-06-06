import { areasNavbarNotHome } from "./NavbarMap"

export const myDecksMap = {
  name: "my-decks",
  areas: [
    ...areasNavbarNotHome,
    {
      name: "see-description",
      shape: "rect",
      coords: [873, 553, 1132, 582],
      preFillColor: "red",
    },
    {
      name: "add-card",
      shape: "rect",
      coords: [873, 513, 1132, 542],
      preFillColor: "black"
    },
    {
      name: "study",
      shape: "rect",
      coords: [920, 448, 1080, 410],
      preFillColor: "green"
    }
  ]
}

export const myDecksSeeDescMap = {
  name: "my-decks-description",
  areas: [
    ...areasNavbarNotHome,
    {
      name: "hide-description",
      shape: "rect",
      coords: [873, 553, 1132, 582],
      preFillColor: "red",
    },
  ]
}
