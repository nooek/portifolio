import React, { useState } from "react";
import { ChangersBtnsContainer, Middle, ImagesContainer } from "../../../pages/Flashcard/Styles";
import GamesMarketImage from "../FlashcardImage/FlashcardImage";
import { flashcardHome } from "../../../assets/images/flashcard/index"
import { homeMap } from "../FlashcardImage/Maps/HomeMap"

const InteractiveProject = () => {
  const [pagesInfo, setPagesInfo] = useState([
    {
      pageVisited: flashcardHome,
      pageVisitedName: "home",
      map: homeMap,
    },
  ]);
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
          setPagesInfo={setPagesInfo}
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
