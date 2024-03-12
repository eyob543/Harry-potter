import fetcher from "../fetch";
import { useLoaderData } from "react-router-dom";
import Display from "../Components/Display";
export function loader(){
    return fetcher("https://api.potterdb.com/v1/characters")
}
export default function Books(){
    const data = useLoaderData();
    return(
        <>
            <Display to={'characterDetails'} data={data}/>
        </>
    )
}