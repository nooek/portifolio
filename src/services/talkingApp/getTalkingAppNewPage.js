import { taHome } from "../../assets/images/talkingApp/index";

const getTalkingAppNewPage = (areaName) => {
  switch(areaName) {
    case 'home': 
      return { image: taHome }
    default: 
      return null
  }
}