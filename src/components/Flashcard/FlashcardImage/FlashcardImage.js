import React from "react";
import ImageMapper from "react-image-mapper";
import ChangeFlashCardImage from "../../../services/flashcard/changeFlashcardImage";
import ChangeFlashcardMap from "../../../services/flashcard/changeFlashcardMap";
import ScreenSize from "../../getWindowSize";
import handlePosition from "../../InteractiveImages/handlePosition";

const GamesMarketImage = (props) => {
  // const handlePosition = (area) => {
  //   const changeFlashCardImage = new ChangeFlashCardImage(area.name);
  //   const changeFlashcardMap = new ChangeFlashcardMap(area.name);
  //   const newImage = changeFlashCardImage.change();
  //   if (newImage !== props.pagesInfo[props.index].pageVisited) {
  //     props.setPagesInfo([
  //       ...props.pagesInfo,
  //       {
  //         pageVisited: newImage,
  //         pageVisitedName: area.name,
  //         map: changeFlashcardMap.change(),
  //       },
  //     ]);
  //     props.setIndex(props.pagesInfo.length);
  //   }
  // };

  return (
    <ImageMapper
      src={props.pagesInfo[props.index].pageVisited}
      map={props.pagesInfo[props.index].map}
      width={ScreenSize().winWidth * 0.85}
      imgWidth={2000}
      onClick={(area) =>
        handlePosition(
          {
            index: props.index,
            areaName: area.name,
            pagesInfo: props.pagesInfo,
          },
          {
            changeFlashCardImage: new ChangeFlashCardImage(area.name),
            changeFlashcardMap: new ChangeFlashcardMap(area.name),
            setPagesInfo: props.setPagesInfo,
            setIndex: props.setIndex,
          },
        )
      }
    />
  );
};

export default GamesMarketImage;
