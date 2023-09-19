import { getData } from "../quiries";
import { useQuery } from '@apollo/client';

export default function UserLogin(){
    const {loading, error, data} = useQuery(getData);

    if(loading){
        return <p>Loading ....</p>
    }
    if(error){
        console.log(error.message)
        return <p>Something went wrong {error.message}</p> 
    }

    const handelSubmit =()=>{
        
    }

    const {get_profile} = data;
    return (
        <>
            <form onSubmit={handelSubmit}>
                <input type="text"  name="" id="" />
            </form>
            <p>{get_profile.email}</p>
        </>
    );
}