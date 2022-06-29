const profileMap = {
  name: "profile",
  areas: [
    {
      name: "profile-scrolled-down",
      shape: "rect",
      coords: [2000, 910, 1980, 987],
      preFillColor: "red",
    },
  ],
};

const profileScrolledDownMap = {
  name: "profile-scrolled-down",
  areas: [
    {
      name: "profile",
      shape: "rect",
      coords: [2000, 0, 1980, 70],
      preFillColor: "black",
    },
  ],
};

export { profileMap, profileScrolledDownMap };
