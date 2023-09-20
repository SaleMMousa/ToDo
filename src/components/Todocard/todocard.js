import React from 'react'
import './style.css'
import Rowtab from '../Rowtab/rowtab'
import Button from '../Button/button'


function TodoCard() {
    return (
            <div className="card">
                <h3>Todo List</h3>
                <Rowtab title1={"List"} title2={"Status"} title3={"Close"} headertable ="header-table"/>
                <Rowtab title1={"Go to gym"} title2={<Button text = "pending"/>} title3={<i class="fa-solid fa-trash-can"></i>}/>
                <Rowtab title1={"Chech"} title2={<Button text = "Completed"/>} title3={<i class="fa-solid fa-trash-can"></i>}/>
                <Rowtab title1={"This"} title2={<Button text = "pending"/>} title3={<i class="fa-solid fa-trash-can"></i>}/>
            </div>
    )
}


export default TodoCard
