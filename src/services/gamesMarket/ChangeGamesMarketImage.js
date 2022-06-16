import { 
  gmHome,
  gmStore,
  gmProfile,
  gmPublishGame,
  gmPublishGamesScrolledDown,
  gmCoolComedy,
  gmCoolComedyComments,
  gmHorror
} from "../../assets/images/gamesMarket/index";

class ChangeGamesMarketImage {
  constructor(areaName) {
    this.areaName = areaName;
  }

  change() {
    switch (this.areaName) {
      case "home": {
        return gmHome;
      }
      case "store": {
        return gmStore;
      }
      case "profile": {
        return gmProfile
      }
      case "publish-game": {
        return gmPublishGame
      }
      case "publish-game-scrolleddown": {
        return gmPublishGamesScrolledDown
      }
      case "cool-comedy": {
        return gmCoolComedy
      }
      case "cool-comedy-comments": {
        return gmCoolComedyComments
      }
      case "horror": {
        return gmHorror
      }
      default: {
        return null;
      }
    }
  }
}

export default ChangeGamesMarketImage;
