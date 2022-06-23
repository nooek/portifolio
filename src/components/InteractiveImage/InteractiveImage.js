import React from "react";
import ImageMapper from "react-image-mapper";
import ScreenSize from "../getWindowSize";
import handleImageClickPosition from "../../services/handleImageClickPosition";
import getSizeImage from "../../services/getSizeImage"

const InteractiveImage = (props) => {
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
            getNewPage: props.getNewPage,
            setIndex: props.setIndex,
            dispatch: props.dispatch,
            addPage: props.addPage
          },
        )
      }
    />
  );
};

export default InteractiveImage;
