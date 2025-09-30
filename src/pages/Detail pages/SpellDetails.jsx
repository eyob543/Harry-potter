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
    <div className="bg-black text-gray-200 min-h-screen p-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Spell Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{spellDetail.name}</h1>
          <p className="text-gray-400 italic">
            Incantation: {spellDetail.incantation || "Unknown"}
          </p>

          <div className="text-sm space-y-2">
            <p>
              <span className="font-semibold">Effect:</span>{" "}
              {spellDetail.effect || "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Hand Movement:</span>{" "}
              {spellDetail.hand || "Not specified"}
            </p>
            <p>
              <span className="font-semibold">Light Color:</span>{" "}
              {spellDetail.light || "N/A"}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          {spellDetail.image ? (
            <img
              src={spellDetail.image}
              alt={spellDetail.name}
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
