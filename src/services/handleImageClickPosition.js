const checkSameImage = (currImage, newImage) => {
  return currImage === newImage
}

const shouldTrade = (data) => {
  return data.shouldTrade
}

const handlePosition = (data, functions) => {
  const newPage = functions.getNewPage(data.areaName, data.currAreaName, data.pagesInfo[data.index].shouldTrade);
  const sameImage = checkSameImage(newPage.image, data.pagesInfo[data.index].pageVisited)
  const trade = shouldTrade(data.pagesInfo[data.index])
  if (!sameImage || trade) {
    functions.dispatch(functions.addPage([
      ...data.pagesInfo,
      {
        pageVisited: newPage.image,
        pageVisitedName: !trade ? data.areaName : newPage.name,
        shouldTrade: newPage.shouldTrade,
        map: newPage.map,
      },
    ]));
    functions.setIndex(data.pagesInfo.length);
  }
};

export default handlePosition;
