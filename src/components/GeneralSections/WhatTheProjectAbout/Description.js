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
       { description }
      </SectionsDescription>
    </SectionsDescriptionContainer>
  );
};

export default WhatTheProjectAboutDesc;
