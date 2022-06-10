import React, { useEffect } from "react";
import { SectionsDescriptionContainer, SectionsDescription } from "../Styles";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { descAnimation } from "../../GeneralAnimations/GeneralAnimations";

const WhatTheProjectAboutDesc = ({ description }) => {
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
    <SectionsDescriptionContainer>
      <SectionsDescription ref={view} initial="hidden" animate={control} variants={descAnimation}>
        In my path of learning Russian I came across an app called Anki, it's a very common used app
        to learn vocabulary, and it really works, after months revising and adding new words every
        day my vocabulary improved and I could remember almost every word. So I decided to build
        this project, it is completely inspired in Anki's idea of creating decks with cards and
        studying with them.
      </SectionsDescription>
    </SectionsDescriptionContainer>
  );
};

export default WhatTheProjectAboutDesc;
