import './Home.scss'
import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import Widget from '../../Components/Widget/Widget'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'
const Home = () => {
    return (
        <div className='home'>
            <SideBar/>
            <div className="homeContainer">
                <NavBar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earnings"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Home
