import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Images,
  DescriptionContainer,
  DescriptionContentContainer,
  DescriptionTitle,
  Description,
  CloseDescription,
  MoreInfoButton
} from "./Styles";
import {
  titleDescAnimation,
  descAnimation,
  imgAnimation
} from "./Animations"

const Project = ({ name, images, desc, route }) => {
  const navigate = useNavigate()
  const controlTitleDesc = useAnimation();
  const [titleDescRef, titleDescInView] = useInView();
  const controlDesc = useAnimation();
  const [descRef, descInView] = useInView();
  const controlDescContainer = useAnimation();
  const controlImg = useAnimation();
  const [ImgRef, ImgInView] = useInView();
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (ImgInView) {
      controlImg.start("visible");
    } else {
      controlImg.start("hidden");
    }
  }, [ImgInView, controlImg]);

  useEffect(() => {
    if (titleDescInView) {
      controlTitleDesc.start("visible");
    } else {
      controlTitleDesc.start("hidden");
    }
  }, [titleDescInView, controlTitleDesc]);

  useEffect(() => {
    if (descInView) {
      controlDesc.start("visible");
    } else {
      controlDesc.start("hidden");
    }
  }, [descInView, controlDesc]);

  useEffect(() => {
    if (closed) {
      controlDescContainer.start("closed");
      controlImg.start("descClosed");
    } else {
      controlDescContainer.start("open");
      controlImg.start("descOpen");
    }
  }, [closed, controlDescContainer, controlImg]);

  return (
    <Container closed={closed}>
      <Images
        src={images}
        ref={ImgRef}
        variants={imgAnimation}
        initial="hidden"
        animate={controlImg}
        closed={closed}
      />
      <DescriptionContainer closed={closed}>
        <DescriptionContentContainer closed={closed}>
          <DescriptionTitle
            ref={titleDescRef}
            variants={titleDescAnimation}
            initial="hidden"
            animate={controlTitleDesc}
          >
            { name }
          </DescriptionTitle>
          <Description
            ref={descRef}
            variants={descAnimation}
            initial="hidden"
            animate={controlDesc}
          >
            {desc}
          </Description>
          <MoreInfoButton
            ref={titleDescRef}
            variants={titleDescAnimation}
            initial="hidden"
            animate={controlTitleDesc}
            onClick={() => navigate(route)}
          >
            More Info
          </MoreInfoButton>
        </DescriptionContentContainer>
        {closed ? (
          <CloseDescription closed={closed} onClick={() => setClosed(false)}>
            Open
          </CloseDescription>
        ) : (
          <CloseDescription closed={closed} onClick={() => setClosed(true)}>
            Close
          </CloseDescription>
        )}
      </DescriptionContainer>
    </Container>
  );
};

export default Project;
