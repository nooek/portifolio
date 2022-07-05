import { areasNavbarHome } from "./NavbarMap"

const homeMap = {
  name: "home",
  areas: [
    ...areasNavbarHome,
    {
      name: "horror",
      shape: "rect",
      coords: [868, 550, 1128, 240],
    },
    {
      name: "horror",
      shape: "rect",
      coords: [1365, 980, 1623, 710],
    },
    {
      name: "cool-comedy",
      shape: "rect",
      coords: [375, 980, 630, 710],
    },
  ],
};

export default homeMap;
