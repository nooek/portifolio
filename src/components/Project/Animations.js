export const titleDescAnimation = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

export const descAnimation = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 100 },
};

export const imgAnimation = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
  descClosed: { width: "100%", height: "100%", transition: { duration: 0.8 } },
  descOpen: { width: "100%", height: "100%", transition: { duration: 0.1 } },
};
