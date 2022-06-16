import {
  homeMap,
  storeMap,
  profileMap,
  publishGameMap,
  publishGameMapScrolledDown,
  coolComedyMap,
  coolComedyCommentsMap,
  horrorMap
} from "../../components/GamesMarket/GamesMarketImage/Maps/index"

class ChangeGamesMarketMap {
  constructor(areaName) {
    this.areaName = areaName;
  }
  
  change() {
    switch(this.areaName) {
      case 'home': {
        return homeMap
      }
      case "store": {
        return storeMap
      }
      case "profile": {
        return profileMap
      }
      case "publish-game": {
        return publishGameMap
      }
      case "publish-game-scrolleddown": {
        return publishGameMapScrolledDown
      }
      case "cool-comedy": {
        return coolComedyMap
      }
      case "cool-comedy-comments": {
        return coolComedyCommentsMap
      }
      case "horror": {
        return horrorMap
      }
      default: {
        return null
      }
    }
  }
}

export default ChangeGamesMarketMap;
