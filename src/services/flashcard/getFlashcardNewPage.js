import {
  flashcardHome,
  flashcardHomeScrolledDown,
  flashcardCreateDeck,
  flashcardAllDecks,
  flashcardMyDecks,
  flashcardMyDecksSeeDesc,
  flashcardStudyNext,
  flashcardProfile,
  flashcardStudyHide,
  flashcardStudyShow,
  flashcardContact,
  flashcardLogin,
  flashcardRegister,
} from "../../assets/images/flashcard/index";
import { homeMap, homeScrolledDown } from "../../components/Flashcard/FlashcardImage/Maps/HomeMap";
import contactMap from "../../components/Flashcard/FlashcardImage/Maps/ContactMap";
import {
  myDecksMap,
  myDecksSeeDescMap,
} from "../../components/Flashcard/FlashcardImage/Maps/MyDecksMap";
import {
  studyMap,
  studyMapShow,
  studyMapNext,
} from "../../components/Flashcard/FlashcardImage/Maps/StudyMap";
import profileMap from "../../components/Flashcard/FlashcardImage/Maps/ProfileMap";
import createDeckMap from "../../components/Flashcard/FlashcardImage/Maps/CreateDeckMap";
import allDecksMap from "../../components/Flashcard/FlashcardImage/Maps/AllDecksMap";
import loginMap from "../../components/Flashcard/FlashcardImage/Maps/LoginMap";
import registerMap from "../../components/Flashcard/FlashcardImage/Maps/RegisterMap";
import newPage from "../newPage";

const getFlashcardNewPage = (areaName) => {
  switch (areaName) {
    case "home": {
      return newPage(flashcardHome, homeMap);
    }
    case "home-scroll-down": {
      return newPage(flashcardHomeScrolledDown, homeScrolledDown);
    }
    case "home-scroll-up": {
      return newPage(flashcardHome, homeMap);
    }
    case "create-deck": {
      return newPage(flashcardCreateDeck, createDeckMap);
    }
    case "see-all-decks": {
      return newPage(flashcardAllDecks, allDecksMap);
    }
    case "my-decks": {
      return newPage(flashcardMyDecks, myDecksMap);
    }
    case "see-description": {
      return newPage(flashcardMyDecksSeeDesc, myDecksSeeDescMap);
    }
    case "hide-description": {
      return newPage(flashcardMyDecks, myDecksMap);
    }
    case "profile": {
      return newPage(flashcardProfile, profileMap);
    }
    case "contact": {
      return newPage(flashcardContact, contactMap);
    }
    case "log-out": {
      return newPage(flashcardLogin, loginMap);
    }
    case "register": {
      return newPage(flashcardRegister, registerMap);
    }
    case "study": {
      return newPage(flashcardStudyHide, studyMap);
    }
    case "show-awnser": {
      return newPage(flashcardStudyShow, studyMapShow);
    }
    case "next-card": {
      return newPage(flashcardStudyNext, studyMapNext);
    }
    default: {
      return "";
    }
  }
};

export default getFlashcardNewPage;
