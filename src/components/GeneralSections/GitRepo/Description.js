import React, { useEffect } from "react";
import { SectionsDescriptionContainer, SectionsDescription } from "../Styles";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { descAnimation } from "../../GeneralAnimations/GeneralAnimations";

const GitRepoDesc = ({ linkGit }) => {
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
        <a
          href={linkGit}
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "white" }}
        >
          Click here
        </a>
      </SectionsDescription>
    </SectionsDescriptionContainer>
  );
};

export default GitRepoDesc;
