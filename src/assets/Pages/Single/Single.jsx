import  './Single.scss'
import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import Chart from '../../Components/Chart/Chart'
import List from '../../Components/Table/Table'
const Single = () => {
    return (
        <div className='single'>
        <SideBar/>
        <div className="singleContainer">
        <NavBar/>
        <div className="top">
            <div className="left">
                <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                <div className="item">
                    <img
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt=""
                    className='itemImg'/>
                    <div className="details">
                        <h1 className="itemName">Jane Doe</h1>
                        <div className="detailItem">
                            <span className="itemKey">Email:</span>
                            <span className="itemValue">janedoe@gmail.com</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Phone:</span>
                            <span className="itemValue">+1 7647 53 57</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Address:</span>
                            <span className="itemValue">Elton st. 424 Garden Yd. NewYork</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Country:</span>
                            <span className="itemValue">USA</span>
                        </div>
                        </div>
                </div>
            </div>
            <div className="right">
                <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
            </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
            <List/>
        </div>
        </div>
        </div>
    )
}
export default Single
