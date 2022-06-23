const handlePosition = (data, functions) => {
  const newPage = functions.getNewPage(data.areaName);
  if (newPage.image !== data.pagesInfo[data.index].pageVisited) {
    functions.dispatch(functions.addPage([
      ...data.pagesInfo,
      {
        pageVisited: newPage.image,
        pageVisitedName: data.areaName,
        map: newPage.map,
      },
    ]));
    console.log(data.pagesInfo)
    functions.setIndex(data.pagesInfo.length);
  }
};

export default handlePosition;
