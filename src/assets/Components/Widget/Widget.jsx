import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person3Icon from '@mui/icons-material/Person3';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const Widget = ({type}) => {
    let data;
    const amount = 100
    const deff = 20
    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See All Users",
                icon: (
                    <Person3Icon className='icon' style={{color:"crimson",
                    backgroundColor:"#ff000047"}}/>
                )
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View All Orders",
                icon: (
                    <ShoppingCartIcon className='icon' style={{color:"goldenrod",
                        backgroundColor:"rgba(218, 165, 32, 0.2)"
                    }}/>
                )
            }
            break;
        case "earnings":
            data = {
                title: "REARNINGS",
                isMoney: true,
                link: "View net Earning",
                icon: (
                    <MonetizationOnOutlinedIcon className='icon' style={{color:"green",
                        backgroundColor:"rgba(0, 128, 0, 0.2)"
                    }}/>
                )
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletIcon className='icon' style={{color:"purple", 
                        backgroundColor:"rgba(128, 0, 128, 0.2)"
                    }}/>
                )
            }
            break;
            default:
                break;
    }
    return (
        <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {deff} %
                </div>
                {data.icon}
        </div>
        </div>
    )
}

export default Widget
