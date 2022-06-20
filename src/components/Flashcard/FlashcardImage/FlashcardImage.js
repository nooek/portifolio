import React from "react";
import ImageMapper from "react-image-mapper";
import ChangeFlashCardImage from "../../../services/flashcard/changeFlashcardImage";
import ChangeFlashcardMap from "../../../services/flashcard/changeFlashcardMap";
import ScreenSize from "../../getWindowSize";
import handleImageClickPosition from "../../../services/handleImageClickPosition";
import getSizeImage from "../../../services/getSizeImage"

const FlashcardImage = (props) => {
  const screenSize = ScreenSize()

  return (
    <ImageMapper
      src={props.pagesInfo[props.index].pageVisited}
      map={props.pagesInfo[props.index].map}
      width={getSizeImage(screenSize.winWidth)}
      imgWidth={2000}
      onClick={(area) =>
        handleImageClickPosition(
          {
            index: props.index,
            areaName: area.name,
            pagesInfo: props.pagesInfo,
          },
          {
            changeImage: new ChangeFlashCardImage(area.name),
            changeMap: new ChangeFlashcardMap(area.name),
            setIndex: props.setIndex,
            dispatch: props.dispatch,
            addPage: props.addPage
          },
        )
      }
    />
  );
};

export default FlashcardImage;
