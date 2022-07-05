const defaultHomeMap = [
  {
    name: "profile",
    shape: "circle",
    coords: [40, 40, 25],
  },
  {
    name: "add-friend",
    shape: "rect",
    coords: [284, 25, 318, 50],
  },
  {
    name: "home-menu",
    shape: "rect",
    coords: [338, 25, 348, 50],
  },
  {
    name: "home-chat-opened",
    shape: "rect",
    coords: [0, 148, 362, 234],
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
    },
  ]
}

export { homeMap, homeMenuMap, homeOpenedChat };
