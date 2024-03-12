import { useLoaderData } from "react-router-dom";
import fetcher from "../fetch";
import Display from "../Components/Display";
export function loader(){
    return fetcher("https://api.potterdb.com/v1/books")
}
export default function Books(){
    const data = useLoaderData();
    return(
        <>
            <Display to={'bookDetails'} data={data}/>
        </>
    )
}