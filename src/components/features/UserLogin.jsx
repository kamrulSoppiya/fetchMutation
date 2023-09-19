import { useState } from "react";
import { getData } from "../quiries";
import { useQuery } from '@apollo/client';

export default function UserLogin(){
    const {loading, error, data} = useQuery(getData);
    const [text, setText] = useState();
    
    if(loading){
        return <p>Loading ....</p>
    }

    if(error){
        console.log(error.message)
        return <p>Something went wrong {error.message}</p> 
    }

    const handelSubmit =(e)=>{
        e.preventDefault();
        console.log()
    }

    const handleChange =(e)=>{
        setText(e.target.value)
    }

    const {get_profile} = data;
    return (
        <>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Enter title" value={text} onChange={handleChange} />
                <input type="text" placeholder="Enter title" value={text} onChange={handleChange} />
            </form>
            <p>{get_profile.email}</p>
        </>
    );
}