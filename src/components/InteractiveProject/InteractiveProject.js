import React, { useState, useEffect } from "react";
import { ChangersBtnsContainer, Middle, ImagesContainer } from "../../pages/Flashcard/Styles";
import { useSelector, useDispatch } from "react-redux";
import { addPage } from "../../store/pagesInfo/pagesInfo";

const InteractiveProject = ({ ImageComponent, defaultPageInfo }) => {
  const pagesInfo = useSelector((state) => state.pagesInfo.data);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(
      addPage([
        {
          pageVisited: defaultPageInfo.image,
          pageVisitedName: defaultPageInfo.areaName,
          map: defaultPageInfo.map,
        },
      ]),
    );
    setLoading(false);
  }, [defaultPageInfo, dispatch]);

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
        {!loading ? (
          <ImageComponent
            index={index}
            setIndex={setIndex}
            pagesInfo={pagesInfo}
            dispatch={dispatch}
            addPage={addPage}
          />
        ) : null}
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
