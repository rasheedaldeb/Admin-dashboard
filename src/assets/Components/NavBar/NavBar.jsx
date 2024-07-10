import './NavBar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { darkModeContext } from '../../../Context/darkModeContext';
import { useContext } from 'react';
const NavBar = () => {
    const {dispatch} = useContext(darkModeContext)
    return (
        <div className='navBar'>
        <div className="wrapper">
        <div className="search">
        <input type="text" placeholder='Search....' /> 
        <SearchIcon/>
        </div>
        <div className="items">
            <div className="item">
        <LanguageIcon className='icon'/>
        English
            </div>
            <div className="item">
        <DarkModeIcon className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>
            </div>
            <div className="item">
        <FullscreenExitIcon className='icon'/>
            </div>
            <div className="item">
        <NotificationsNoneIcon className='icon'/>
        <div className="counter">1</div>
            </div>
            <div className="item">
        <ChatBubbleOutlineIcon className='icon'/>
        <div className="counter">2</div>
            </div>
            <div className="item">
        <ListIcon className='icon'/>
            </div>
            <div className="item">
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
        className='avatar'
        alt="" />
            </div>
        </div>
        </div>
        </div>
    )
}

export default NavBar
