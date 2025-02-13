import  './New.scss'
import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
const New = ({inputs, title}) => {
    const [file, setfile] = useState("")
    console.log(file)
    return (
        <div className='new'>
        <SideBar/>
        <div className="newContainer">
        <NavBar/>
        <div className="top">
            <h1>{title}</h1>
        </div>
        <div className="bottom">
            <div className="left">
            <img src={file ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
            </div>
            <div className="right">
            <form>
                <div className="formInput">
                    <label htmlFor="file">Image:<DriveFolderUploadIcon className='icon'/></label>
                    <input type="file" onChange={e=>setfile(e.target.files[0])} id='file' style={{display:"none"}}/>
                </div>
                {inputs.map((input)=>(
                    <div className="formInput" key={input.id}>
                    <label htmlFor="name">{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder}/>
                </div>
                ))}
                <button>Send</button>
            </form>
            </div>
        </div>
        </div>
        </div>
    )
}

export default New
