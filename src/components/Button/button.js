import './style.css'


function Button({text,type,className , onClick}) {
    return (
    <div className={`btn ${className}`} onClick={onClick}>
        {text}
    </div>
    )
}




export default Button
