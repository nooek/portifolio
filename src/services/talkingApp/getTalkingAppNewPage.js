import { 
  taHome,
  taHomeMenu,
  taHomeChatOpened,
  taAddFriend,
  taProfile,
  taProfileScrolledDown,
  taConfig
} from "../../assets/images/talkingApp/index";
import { 
  homeMap,
  homeMenuMap,
  homeOpenedChat,
  addFriendMap,
  profileMap,
  profileScrolledDownMap,
  configMap
} from "../../components/TalkingApp/TalkingAppImage/Maps";
import newPage from "../newPage";

const getTalkingAppNewPage = (areaName, currAreaName) => {
  switch(areaName) {
    case 'home': 
      return newPage(taHome, homeMap)
    case "home-menu": {
      if (currAreaName === "home-menu") {
        return newPage(taHome, homeMap, true, 'home')
      }
      return newPage(taHomeMenu, homeMenuMap, true, 'home-menu')
    }
    case "home-chat-opened": {
      return newPage(taHomeChatOpened, homeOpenedChat)
    }
    case "add-friend": {
      return newPage(taAddFriend, addFriendMap)
    }
    case "profile": {
      return newPage(taProfile, profileMap)
    }
    case "profile-scrolled-down": {
      return newPage(taProfileScrolledDown, profileScrolledDownMap)
    }
    case "config": {
      return newPage(taConfig, configMap)
    }
    default: 
      return null
  }
}

export default getTalkingAppNewPage;
