import React, { useEffect } from "react";
import {
  SectionsTechLogoDescription,
  SectionsTechsLogosContainer,
  SectionsTechLogoContainer,
  SectionsTechsLogos,
} from "./Styles";
import { 
  logoNameAnimation,
  logoAnimation
} from "../GeneralAnimations/GeneralAnimations";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechUsedLogos = ({ logos }) => {
  const controlNameLogo = useAnimation();
  const [logoNameRef, logoNameInView] = useInView();
  const controlLogo = useAnimation();
  const [logoRef, logoInView] = useInView();

  useEffect(() => {
    if (logoNameInView) {
      controlNameLogo.start("visible");
    } else {
      controlNameLogo.start("hidden");
    }
  }, [controlNameLogo, logoNameInView]);

  useEffect(() => {
    if (logoInView) {
      controlLogo.start("visible");
    }
  }, [controlLogo, logoInView]);

  return (
    <SectionsTechsLogosContainer>
      {logos.map((logo, index) => {
        return (
          <SectionsTechLogoContainer key={index}>
            <SectionsTechsLogos
              src={logo.logo}
              key={index}
              ref={logoRef}
              variants={logoAnimation}
              initial="hidden"
              animate={controlLogo}
            />
            <SectionsTechLogoDescription
              ref={logoNameRef}
              variants={logoNameAnimation}
              initial="hidden"
              animate={controlNameLogo}
            >- {logo.name}</SectionsTechLogoDescription>
          </SectionsTechLogoContainer>
        );
      })}
    </SectionsTechsLogosContainer>
  );
};

export default TechUsedLogos;
