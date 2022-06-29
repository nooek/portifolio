const newPage = (image, map, shouldTrade, name) => {
  return { 
    image: image, 
    map: map, 
    shouldTrade: shouldTrade | false,
    name: name
  }
}

export default newPage;
