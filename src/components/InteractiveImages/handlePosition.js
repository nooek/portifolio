const handlePosition = (data, functions) => {
  console.log(data)
  console.log(functions)
  const newImage = functions.changeFlashCardImage.change();
  if (newImage !== data.pagesInfo[data.index].pageVisited) {
    functions.setPagesInfo([
      ...data.pagesInfo,
      {
        pageVisited: newImage,
        pageVisitedName: data.areaName,
        map: functions.changeFlashcardMap.change(),
      },
    ]);
    functions.setIndex(data.pagesInfo.length);
  }
};

export default handlePosition;
