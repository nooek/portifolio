import { areasNavbarNotHome } from "./NavbarMap"

export const studyMap = {
  name: "study-map",
  areas: [
    ...areasNavbarNotHome,
    {
      name: "show-awnser",
      shape: "rect",
      coords: [951, 786, 1050, 818],
    },
  ]
}

export const studyMapShow = {
  name: "study-map",
  areas: [
    ...areasNavbarNotHome,
    {
      name: "next-card",
      shape: "rect",
      coords: [766, 786, 1235, 818],
    },
  ]
}

export const studyMapNext = {
  name: "study-map",
  areas: [...areasNavbarNotHome]
}
