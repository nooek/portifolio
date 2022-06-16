const handlePosition = (data, functions) => {
  console.log(functions)
  const newImage = functions.changeFlashCardImage.change();
  if (newImage !== data.pagesInfo[data.index].pageVisited) {
    functions.dispatch(functions.addPage([
      ...data.pagesInfo,
      {
        pageVisited: newImage,
        pageVisitedName: data.areaName,
        map: functions.changeFlashcardMap.change(),
      },
    ]));
    console.log(data.pagesInfo)
    functions.setIndex(data.pagesInfo.length);
  }
};

export default handlePosition;
