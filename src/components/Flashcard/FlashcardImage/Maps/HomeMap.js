import { areasNavbarHome } from "./NavbarMap"

export const homeMap = {
  name: "home",
  areas: [
    ...areasNavbarHome,
    {
      name: "home-scroll-down",
      shape: "rect",
      coords: [2000, 910, 1980, 987],
      preFillColor: "red"
    },
    {
      name: "create-deck",
      shape: "circle",
      coords: [992.5, 398, 23],
      preFillColor: "black"
    }
  ]
}

export const homeScrolledDown = {
  name: "home-scrolled-down",
  areas: [
    {
      name: "see-all-decks",
      shape: "rect",
      coords: [860, 910, 1120, 987],
      preFillColor: "yellow"
    },
    {
      name: "home-scroll-up",
      shape: "rect",
      coords: [2000, 0, 1980, 70],
      preFillColor: "black"
    }
  ],
};
