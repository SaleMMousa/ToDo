import React from 'react'
import './style.css'
import Rowtab from '../Rowtab/rowtab'


function TodoCard({data,setData}) {
    return (
            <div className="card">
                <h3>Todo List</h3>
                <table>
                    <thead>
                        <tr className='header-table'>
                            <td>List</td>
                            <td>Status</td>
                            <td>Close</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                {data.map((ele) => 
                    <Rowtab ele = {ele} handelDelete ={()=>{
                        const filtered = data.filter((item) => item.id !== ele.id);
                        setData(filtered)
                    }}/>
                )}
            </div>
    )
}



export default TodoCard;
