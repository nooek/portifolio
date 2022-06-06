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
  flashcardRegister
} from "../../assets/images/flashcard/index"

class ChangeFlashCardImage {
  constructor(areaName) {
    this.areaName = areaName;
  }

  change() {
    switch(this.areaName) {
      case "home": {
        return flashcardHome
      }
      case "home-scroll-down": {
        return flashcardHomeScrolledDown
      }
      case "home-scroll-up": {
        return flashcardHome
      }
      case "create-deck": {
        return flashcardCreateDeck
      }
      case "see-all-decks": {
        return flashcardAllDecks
      }
      case "my-decks": {
        return flashcardMyDecks
      }
      case "see-description": {
        return flashcardMyDecksSeeDesc
      }
      case "hide-description": {
        return flashcardMyDecks
      }
      case "profile": {
        return flashcardProfile 
      }
      case "contact": {
        return flashcardContact
      }
      case "log-out": {
        return flashcardLogin
      }
      case "register": {
        return flashcardRegister
      }
      case "study": {
        return flashcardStudyHide
      }
      case "show-awnser": {
        return flashcardStudyShow
      }
      case "next-card": {
        return flashcardStudyNext
      }
      default: {
        return ""
      }
    }
  }
}

export default ChangeFlashCardImage;
