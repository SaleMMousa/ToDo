import { useState } from 'react'
import Button from '../Button/button'
import './style.css'

function Rowtab({ele,headertable,handelDelete}) {
    const[type,setType] = useState(ele.completed);

    return (<>
        <table className={`${headertable?"header-table":"body-table"}`}>
            <tr key={ele.id}>
                <td>{ele.title}</td>
                <td>{<Button text = {ele.completed ? "completed": "pending"} className={type ? "bg-green" : "bg-pen"}/>}</td>
                <td onClick={handelDelete}>{<i className="fa-solid fa-trash-can"></i>}</td>
            </tr>
        </table>        
        </>        
    )
}


export default Rowtab
