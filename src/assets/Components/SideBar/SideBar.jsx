import './SideBar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3Icon from '@mui/icons-material/Person3';
import InventoryIcon from '@mui/icons-material/Inventory';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LoginIcon from '@mui/icons-material/Login';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { darkModeContext } from '../../../Context/darkModeContext';
import { useContext } from 'react';
const SideBar = () => {
    const {dispatch} = useContext(darkModeContext)
    return (
        <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <Person3Icon className='icon'/>
                    <span>Users</span>
                </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                <InventoryIcon className='icon'/>
                    <span>Products</span>
                </li>
                    </Link>
                <li>
                    <FilterFramesIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <DirectionsCarFilledIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                <LoginIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <PermIdentityIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>LogOut</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" 
            onClick={()=>dispatch({type: "LIGHT"})}></div>
            <div className="colorOption"
            onClick={()=>dispatch({type: "DARK"})}></div>
        </div>
        </div>
    )
}

export default SideBar
