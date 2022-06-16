import { areasNavbarNotHome } from "./NavbarMap"

const storeMap = {
  name: "store",
  areas: [
    ...areasNavbarNotHome,
    {
      name: "cool-comedy",
      shape: "rect",
      coords: [0, 550, 1998, 468],
      preFillColor: "red"
    },
    {
      name: "horror",
      shape: "rect",
      coords: [0, 640, 1998, 558],
      preFillColor: "black"
    },
  ]
}

export default storeMap;
