//importing all the components here
import CustomTextInputBox from './components/CustomTextInputBox'
import MessageComponent from './components/MessageComponent'
import StreamInfo from './components/StreamInfo'
import NoMessagesBox from './components/NoMessagesBox'
import Discuss from './components/Discuss'
import CornerImage from './components/CornerImage'
import Interest from './components/Interest'
import Settings from './components/Settings'
import NavBarTitleOnly from './components/NavBarTitleOnly'
import UserFlatlist from './components/UserFlatlist'
import LiveScreen from './components/LiveScreen'
import TermsService from './components/TermsService'
import Slider from './components/Slider'
import Login from './components/Login'
import Messages from './components/Messages'
import CreateAccount from './components/CreateAccount'
import UpgradePremium from './components/UpgradePremium'
import ShareArticle from './components/ShareArticle'
import SmallModels from './components/SmallModels'
import Error404 from './components/error404'
import NoInternet from './components/NoInternet'
import CongratsModal from './components/CongratsModal'
import ProfileSetup from './components/ProfileSetup'
import DeleteProfile from './components/DeleteProfile'


const user = "https://c.disquscdn.com/uploads/users/21084/4175/avatar92.jpg?1501654430"

//ITS A ROOT FILE TO TEST ALL THE COMPONENENTS.

export default function App() {
  return (
    //<CustomTextInputBox />
    //<StreamInfo/>
    //<MessageComponent username="Ric" profilepic={user} messageContent="Hey this is an amazing component by freekydesigner!" messageTime="12:05 PM"/> 
    //<NoMessagesBox/>
    //<Discuss/>
    //<CornerImage/>
    //<TermsService/>
   //<Slider/>
    //<Login/>
    //<ShareArticle/>
    //<SmallModels/>
    //<Error404/>
    //<NoInternet/>
    <CongratsModal/>
    //<ProfileSetup/>
    //<DeleteProfile/>
    //<Messages/>
    //<CreateAccount/>
    //<UpgradePremium/>
    //<Interest/>
    //<Settings/>
    //<NavBarTitleOnly title="Discover" NumIcons={3} iconOne="moon" iconTwo="bell" iconThree="search"/>
    //<UserFlatlist/>
    //<LiveScreen/>
  );
}

