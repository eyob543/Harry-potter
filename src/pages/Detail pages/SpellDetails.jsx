import { useLoaderData, useParams } from "react-router-dom";
import fetcher from "../../fetch";
import _ from "lodash";
export function loader() {
  return fetcher("https://api.potterdb.com/v1/spells");
}

export default function SpellDetails() {
  const param = useParams();
  const data = useLoaderData();
  const filteredData = _.filter(data, ({ id }) => id === param.id);
  const spellDetail = filteredData[0].attributes;
  return (
    <div>
      <div className="flex flex-col place-items-center gap-4">
        {spellDetail.image ? (
          <img
            className="w-min"
            alt={`${spellDetail.name}`}
            src={`${spellDetail.image}`}
          />
        ) : (
          <p>No image available</p>
        )}
        <p className="capitalize">name: {spellDetail.name}</p>
        <p className="capitalize">effect: {spellDetail.effect}</p>
        <p className="capitalize">hand: {spellDetail.hand}</p>
        <p className="capitalize">incantation: {spellDetail.incantation}</p>
        <p className="capitalize">color: {spellDetail.light}</p>
      </div>
    </div>
  );
}
