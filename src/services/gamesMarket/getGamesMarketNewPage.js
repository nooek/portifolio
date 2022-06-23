import {
  gmHome,
  gmStore,
  gmProfile,
  gmPublishGame,
  gmPublishGamesScrolledDown,
  gmCoolComedy,
  gmCoolComedyComments,
  gmHorror,
} from "../../assets/images/gamesMarket/index";
import {
  homeMap,
  storeMap,
  profileMap,
  publishGameMap,
  publishGameMapScrolledDown,
  coolComedyMap,
  coolComedyCommentsMap,
  horrorMap,
} from "../../components/GamesMarket/GamesMarketImage/Maps/index";
import newPage from "../newPage";

const getGamesMarketNewPage = (areaName) => {
  switch (areaName) {
    case "home": {
      return newPage(gmHome,  homeMap);
    }
    case "store": {
      return newPage(gmStore,  storeMap);
    }
    case "profile": {
      return newPage(gmProfile,  profileMap);
    }
    case "publish-game": {
      return newPage(gmPublishGame,  publishGameMap);
    }
    case "publish-game-scrolleddown": {
      return newPage(gmPublishGamesScrolledDown,  publishGameMapScrolledDown);
    }
    case "cool-comedy": {
      return newPage(gmCoolComedy,  coolComedyMap);
    }
    case "cool-comedy-comments": {
      return newPage(gmCoolComedyComments,  coolComedyCommentsMap);
    }
    case "horror": {
      return newPage(gmHorror,  horrorMap);
    }
    default: {
      return null;
    }
  }
};

export default getGamesMarketNewPage;
