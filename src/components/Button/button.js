import './style.css'


function Button({text,type,className}) {
    return (
    <div className={`btn ${type === "add" ? "bg-red" : "bg-green"}`}>
        {text}
    </div>
    )
}




export default Button
