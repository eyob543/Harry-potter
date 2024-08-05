import { useLoaderData, useParams } from "react-router-dom";
import fetcher from "../../fetch";
import _ from "lodash";
export function loader() {
  return fetcher("https://api.potterdb.com/v1/potions");
}

export default function PotionDetails() {
  const param = useParams();
  const data = useLoaderData();
  const filteredData = _.filter(data, ({ id }) => id === param.id);
  const potionDetail = filteredData[0].attributes;

  return (
    <div>
      <div className="flex flex-col place-items-center gap-4">
        {potionDetail.image ? (
          <img
            className="w-min"
            alt={`${potionDetail.name}`}
            src={`${potionDetail.image}`}
          />
        ) : (
          <p>No image available</p>
        )}
        <p className="capitalize">name: {potionDetail.name}</p>
        <p className="capitalize">effect: {potionDetail.effect}</p>
        <p className="capitalize">
          characteristics: {potionDetail.characteristics}
        </p>
        <p className="capitalize">ingredients: {potionDetail.ingredients}</p>
        {potionDetail.inventors && (
          <p className="capitalize">inventors: {potionDetail.inventors}</p>
        )}
        {potionDetail.side_effects && (
          <p className="capitalize">inventors: {potionDetail.side_effects}</p>
        )}
      </div>
    </div>
  );
}
