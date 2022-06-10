import React, { useState } from "react";
import { ChangersBtnsContainer, Middle, ImagesContainer } from "../../../pages/Flashcard/Styles";
import GamesMarketImage from "../FlashcardImage/FlashcardImage";
import { useSelector, useDispatch } from 'react-redux'

const InteractiveProject = () => {
  const pagesInfo = useSelector(state => state.pagesInfo.pagesInfo)
  const dispatch = useDispatch()
  const [index, setIndex] = useState(0);

  return (
    <ImagesContainer>
      <ChangersBtnsContainer>
        <button
          onClick={() => setIndex(index - 1)}
          disabled={pagesInfo[index - 1] !== undefined ? false : true}
        >
          Previous
        </button>
      </ChangersBtnsContainer>
      <Middle>
        <GamesMarketImage
          index={index}
          setIndex={setIndex}
          pagesInfo={pagesInfo}
          dispatch={dispatch}
        />
      </Middle>
      <ChangersBtnsContainer>
        <button
          onClick={() => setIndex(index + 1)}
          disabled={pagesInfo[index + 1] !== undefined ? false : true}
        >
          Next
        </button>
      </ChangersBtnsContainer>
    </ImagesContainer>
  );
};

export default InteractiveProject;
