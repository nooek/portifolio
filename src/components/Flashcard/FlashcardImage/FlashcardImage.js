import React from "react";
import ImageMapper from "react-image-mapper";
import ChangeFlashCardImage from "../../../services/flashcard/changeFlashcardImage";
import ChangeFlashcardMap from "../../../services/flashcard/changeFlashcardMap";
import ScreenSize from "../../getWindowSize";
import handlePosition from "../../InteractiveImages/handlePosition";
import getSizeImage from "../../../services/getSizeImage"

const GamesMarketImage = (props) => {
  const screenSize = ScreenSize()

  return (
    <ImageMapper
      src={props.pagesInfo[props.index].pageVisited}
      map={props.pagesInfo[props.index].map}
      width={getSizeImage(screenSize.winWidth)}
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
            setIndex: props.setIndex,
            dispatch: props.dispatch
          },
        )
      }
    />
  );
};

export default GamesMarketImage;
