import { areasNavbarHome } from "./NavbarMap"

const homeMap = {
  name: "home",
  areas: [
    ...areasNavbarHome,
    {
      name: "horror",
      shape: "rect",
      coords: [868, 550, 1128, 240],
      preFillColor: "red"
    },
    {
      name: "horror",
      shape: "rect",
      coords: [1365, 980, 1623, 710],
      preFillColor: "red"
    },
    {
      name: "cool-comedy",
      shape: "rect",
      coords: [375, 980, 630, 710],
      preFillColor: "red"
    },
  ],
};

export default homeMap;
