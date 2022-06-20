import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionsContainer, SectionsNameContainer, SectionsName } from "./Styles";
import {
  javascriptLogo,
  cssLogo,
  htmlLogo,
  reactLogo,
  styledComponentsLogo,
  nodeJsLogo,
  mySqlLogo,
  sequelizeLogo,
} from "../../../assets/images/techUsed/index";
import { titleAnimation } from "../../GeneralAnimations/GeneralAnimations";
import TechUsedLogos from "../../TechUsedLogos/TechUsedLogos";

const TechUsed = () => {
  const controlTitle = useAnimation();
  const [titleRef, titleInView] = useInView();
  const logos = [
    {
      logo: javascriptLogo,
      name: "Javascript",
    },
    {
      logo: htmlLogo,
      name: "HTML",
    },
    {
      logo: cssLogo,
      name: "CSS"
    },
    {
      logo: reactLogo,
      name: "React",
    },
    {
      logo: nodeJsLogo,
      name: "NodeJS",
    },
    {
      logo: mySqlLogo,
      name: "MySQL",
    },
    {
      logo: sequelizeLogo,
      name: "Sequelize",
    },
  ];

  useEffect(() => {
    if (titleInView) {
      controlTitle.start("visible");
    } else {
      controlTitle.start("hidden");
    }
  }, [controlTitle, titleInView]);

  return (
    <SectionsContainer>
      <SectionsNameContainer>
        <SectionsName
          ref={titleRef}
          variants={titleAnimation}
          initial="hidden"
          animate={controlTitle}
        >
          Technologies used
        </SectionsName>
      </SectionsNameContainer>
      <TechUsedLogos logos={logos} />
    </SectionsContainer>
  );
};

export default TechUsed;
