import { useEffect, useState } from 'react';
import InputCard from '../../components/InputCard/input'
import TodoCard from '../../components/Todocard/todocard'
import axios from 'axios';
import './style.css'

function Homepage() {
    const [value,setValue] =useState("");
    const inpuonChange = (e)=>{
        setValue(e.target.value)
    }
    console.log(value)
    const [data,setData] = useState([]);

    const fetchData = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setData(response.data);
            console.log(response.data,"response");
            
        }catch(e){

            console.log(e)
        }
        
    }
    useEffect(()=>{
        
        fetchData();
    },[])

    return (
    <div className='card-home'>
        <h2>TODO List</h2>
        <InputCard 
            value={value} 
            onChange={inpuonChange} 
            setData={setData} 
            data={data} 
            setValue={setValue}
        />
        <TodoCard data={data} setData={setData}/>
    </div>  
    );
}

export default Homepage;