const defaultHomeMap = [
  {
    name: "profile",
    shape: "circle",
    coords: [40, 40, 25],
    preFillColor: "red",
  },
  {
    name: "add-friend",
    shape: "rect",
    coords: [284, 25, 318, 50],
    preFillColor: "green",
  },
  {
    name: "home-menu",
    shape: "rect",
    coords: [338, 25, 348, 50],
    preFillColor: "black",
  },
  {
    name: "home-chat-opened",
    shape: "rect",
    coords: [0, 148, 362, 234],
    preFillColor: "black",
  },
];

const homeMap = {
  name: "home",
  areas: [...defaultHomeMap],
};

const homeMenuMap = {
  name: "home-menu",
  areas: [
    ...defaultHomeMap.filter(e => e.name !== "home-chat-opened"),
    {
      name: "config",
      shape: "rect",
      coords: [153, 50, 334, 130],
      preFillColor: "white"
    }
  ]
}

const homeOpenedChat = {
  name: "home-opened-chat",
  areas: [
    ...defaultHomeMap.filter(e => e.name !== "profile"),
    {
      name: "profile",
      shape: "circle",
      coords: [33, 33, 27],
      preFillColor: "red",
    },
  ]
}

export { homeMap, homeMenuMap, homeOpenedChat };
