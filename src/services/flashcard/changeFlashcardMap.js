import { 
  homeMap,
  homeScrolledDown
} from "../../components/Flashcard/FlashcardImage/Maps/HomeMap"
import contactMap from "../../components/Flashcard/FlashcardImage/Maps/ContactMap";
import { 
  myDecksMap,
  myDecksSeeDescMap
} from "../../components/Flashcard/FlashcardImage/Maps/MyDecksMap";
import { 
  studyMap,
  studyMapShow,
  studyMapNext
} from "../../components/Flashcard/FlashcardImage/Maps/StudyMap"
import profileMap from "../../components/Flashcard/FlashcardImage/Maps/ProfileMap";
import createDeckMap from "../../components/Flashcard/FlashcardImage/Maps/CreateDeckMap";
import allDecksMap from "../../components/Flashcard/FlashcardImage/Maps/AllDecksMap";
import loginMap from "../../components/Flashcard/FlashcardImage/Maps/LoginMap";
import registerMap from "../../components/Flashcard/FlashcardImage/Maps/RegisterMap";

class ChangeFlashcardMap {
  constructor(areaName) {
    this.areaName = areaName;
  }
  change() {
    switch (this.areaName) {
      case "home": {
        return homeMap;
      }
      case "home-scroll-down": {
        return homeScrolledDown
      }
      case "home-scroll-up": {
        return homeMap
      }
      case "create-deck": {
        return createDeckMap
      }
      case "see-all-decks": {
        return allDecksMap
      }
      case "my-decks": {
        return myDecksMap;
      }
      case "see-description": {
        return myDecksSeeDescMap
      }
      case "hide-description": {
        return myDecksMap
      }
      case "profile": {
        return profileMap
      }
      case "contact": {
        return contactMap
      }
      case "log-out": {
        return loginMap
      }
      case "register": {
        return registerMap
      }
      case "study": {
        return studyMap
      }
      case "show-awnser": {
        return studyMapShow
      }
      case "next-card": {
        return studyMapNext
      }
      default: {
        return "";
      }
    }
  }
}

export default ChangeFlashcardMap
