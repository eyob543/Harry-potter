import { useLoaderData, useParams } from "react-router-dom"
import fetcher from "../../fetch"
import _ from 'lodash'
export function loader(){
    return fetcher("https://api.potterdb.com/v1/characters");
}

export default function CharacterDetails(){
    const param = useParams();
    const data = useLoaderData();
    const filteredData = _.filter(data,({id}) => id === param.id)
    const characterDetail = filteredData[0].attributes;
    return(
        <div>
            <div className="flex flex-col place-items-center">
                {characterDetail.image ? <img src={`${characterDetail.image}`}/> : <p>{characterDetail.name}</p>}
                <p>Name {characterDetail.name}</p>
                {
                    characterDetail.alias_names.length !== 0 
                        &&
                    <div className="flex gap-1">
                        <p>Alias name: </p>
                            {
                                characterDetail.alias_names.map((name, index) => 
                                    <p key={index}>{name}</p>
                                )
                            }
                    </div>
                }
                <p>Blood status: {characterDetail.blood_status}</p>
                <p>Gender: {characterDetail.gender}</p>
                <div className="flex flex-wrap gap-1 max-w-lg divide-x-2">
                    <p>Jobs: </p>
                    {
                        characterDetail.jobs.map((job, index) => 
                            <p className="p-4" key={index}>{job}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}