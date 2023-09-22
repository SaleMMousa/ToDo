import './style.css'


function Button({text,type,className , onClick}) {
    return (
    <div className={`btn ${type === "add" ? "bg-red" : "bg-green"}`} onClick={onClick}>
        {text}
    </div>
    )
}




export default Button
