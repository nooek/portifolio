import { areasNavbarNotHome } from "./NavbarMap"

export const myDecksMap = {
  name: "my-decks",
  areas: [
    ...areasNavbarNotHome,
    {
      name: "see-description",
      shape: "rect",
      coords: [873, 553, 1132, 582],
    },
    {
      name: "add-card",
      shape: "rect",
      coords: [873, 513, 1132, 542],
    },
    {
      name: "study",
      shape: "rect",
      coords: [920, 448, 1080, 410],
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
    },
  ]
}
