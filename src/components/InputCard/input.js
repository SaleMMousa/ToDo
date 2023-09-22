import Button from '../Button/button'
import './style.css'
import { v4 as uuidv4 } from 'uuid';


function InputCard({onChange,value,data,setData,setValue}) {
    const add = ()=>{
        if (value.trim().length > 0){
            const newObj = {
                title: value,
                completed: false,
                id: uuidv4(),
            }
            setData([newObj,...data])
            setValue("")

        }
    }
    return (
        <div className="input-card">
            <input value={value} onChange={onChange}  placeholder="What would ypu like to do?" />
            <Button text = "Add" type={"add"} onClick = {add} />
        </div>
    )
}


export default InputCard