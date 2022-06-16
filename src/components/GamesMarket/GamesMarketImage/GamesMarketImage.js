import React from "react";
import ImageMapper from "react-image-mapper";
import ChangeGamesMarketImage from "../../../services/gamesMarket/ChangeGamesMarketImage";
import ChangeGamesMarketMap from "../../../services/gamesMarket/ChangeGamesMarketMap";
import ScreenSize from "../../getWindowSize";
import handleImageClickPosition from "../../../services/handleImageClickPosition";
import getSizeImage from "../../../services/getSizeImage"

const FlashcardImage = (props) => {
  const screenSize = ScreenSize()

  console.log(props.pagesInfo)

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
            changeFlashCardImage: new ChangeGamesMarketImage(area.name),
            changeFlashcardMap: new ChangeGamesMarketMap(area.name),
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
