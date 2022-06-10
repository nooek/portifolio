import React, { useEffect } from "react";
import { SectionsNameContainer, SectionsName } from "../Styles";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleAnimation } from "../../GeneralAnimations/GeneralAnimations";

const GitRepoTitle = () => {
  const control = useAnimation();
  const [view, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <SectionsNameContainer>
      <SectionsName ref={view} initial="hidden" animate={control} variants={titleAnimation}>
        Github Repository
      </SectionsName>
    </SectionsNameContainer>
  );
};

export default GitRepoTitle;
