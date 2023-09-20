import Button from '../Button/button'
import './style.css'

function InputCard({onChange,value}) {
    return (
        <div className="input-card">
            <input value={value} onChange={onChange}  placeholder="What would ypu like to do?" />
            <Button text = "Add" type={"add"} />
        </div>
    )
}


export default InputCard