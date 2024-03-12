import { useLoaderData, useParams } from "react-router-dom"
import fetcher from "../../fetch"
import _ from 'lodash'
export function loader(){
    return fetcher("https://api.potterdb.com/v1/movies");
}
export default function MovieDetails(){
    const param = useParams();
    const data = useLoaderData();
    const filteredData = _.filter(data,({id}) => id === param.id)
    const movieDetail = filteredData[0].attributes;
    return(
            <div className="flex flex-col place-items-center">
                <p className="text-center">{movieDetail.title}</p>
                <img src={`${movieDetail.poster}`} alt={`${movieDetail.title}`} className=" w-2/4" />
                <p>{movieDetail.summary}</p>
                <p>Box office {movieDetail.box_office}</p>
                <p>Budget {movieDetail.budget}</p>
                <p>{movieDetail.release_date}</p>
                <div className="flex">
                    <p>Cinematographers:</p>
                    <ul>
                    {
                        movieDetail.cinematographers.map((value, index) => 
                            <li key={index}>{value}</li>
                        )
                    }
                    </ul>
                </div>
                <div className="flex">
                    <p>Directors:</p>
                    <ul>
                    {
                        movieDetail.directors.map((value, index) => 
                            <li key={index}>{value}</li>
                        )
                    }
                    </ul>
                </div>
                <div className="flex">
                    <p>Editors:</p>
                    <ul>
                    {
                        movieDetail.editors.map((value, index) => 
                            <li key={index}>{value}</li>
                        )
                    }
                    </ul>
                </div>
                <div className="flex">
                    <p>Music composers:</p>
                    <ul>
                    {
                        movieDetail.music_composers.map((value, index) => 
                            <li key={index}>{value}</li>
                        )
                    }
                    </ul>
                </div>
                <div className="flex">
                    <p>Producers:</p>
                    <ul>
                    {
                        movieDetail.producers.map((value, index) => 
                            <li key={index}>{value}</li>
                        )
                    }
                    </ul>
                </div>
                <div>
                    Trailer <a className="text-blue-400 hover:underline" href={`${movieDetail.trailer}`} target="_blank">{movieDetail.trailer}</a>    
                </div>
            </div>
    )
}