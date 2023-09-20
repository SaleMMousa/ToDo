import './style.css'

function Rowtab({title1,title2,title3,headertable}) {

    return (
        <table className={`${headertable?"header-table":"body-table"}`}>
            <tr>
                <td>{title1}</td>
                <td>{title2}</td>
                <td>{title3}</td>
            </tr>
        </table>        
            
    )
}


export default Rowtab
