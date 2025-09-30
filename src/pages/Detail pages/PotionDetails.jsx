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
    <div className="bg-black text-gray-200 min-h-screen p-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Potion Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{potionDetail.name}</h1>
          <p className="text-gray-400">
            {potionDetail.effect || "Unknown effect"}
          </p>

          <div className="text-sm space-y-2">
            {potionDetail.characteristics && (
              <p>
                <span className="font-semibold">Characteristics:</span>{" "}
                {potionDetail.characteristics}
              </p>
            )}
            {potionDetail.ingredients && (
              <p>
                <span className="font-semibold">Ingredients:</span>{" "}
                {potionDetail.ingredients}
              </p>
            )}
            {potionDetail.inventors && (
              <p>
                <span className="font-semibold">Inventors:</span>{" "}
                {potionDetail.inventors}
              </p>
            )}
            {potionDetail.side_effects && (
              <p>
                <span className="font-semibold">Side Effects:</span>{" "}
                {potionDetail.side_effects}
              </p>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          {potionDetail.image ? (
            <img
              src={potionDetail.image}
              alt={potionDetail.name}
              className="rounded-lg shadow-lg max-w-md"
            />
          ) : (
            <div className="w-64 h-64 flex items-center justify-center border border-gray-700 rounded-lg">
              No Image Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
