const handlePosition = (data, functions) => {
  const newImage = functions.changeImage.change();
  if (newImage !== data.pagesInfo[data.index].pageVisited) {
    functions.dispatch(functions.addPage([
      ...data.pagesInfo,
      {
        pageVisited: newImage,
        pageVisitedName: data.areaName,
        map: functions.changeMap.change(),
      },
    ]));
    console.log(data.pagesInfo)
    functions.setIndex(data.pagesInfo.length);
  }
};

export default handlePosition;
