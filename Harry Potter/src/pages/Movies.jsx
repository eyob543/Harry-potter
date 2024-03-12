import { useLoaderData } from "react-router-dom"
import fetcher from "../fetch"
import Display from "../Components/Display";
export async function loader(){
    return await fetcher("https://api.potterdb.com/v1/movies")
}
export default function Movies(){
    const data = useLoaderData();
    return(
        <>
          <Display to={'movieDetails'} data={data}/>
        </>
    )
}