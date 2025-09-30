import { useLoaderData, useParams } from "react-router-dom";
import fetcher from "../../fetch";
import _ from "lodash";

export function loader() {
  return fetcher("https://api.potterdb.com/v1/characters");
}

export default function CharacterDetails() {
  const param = useParams();
  const data = useLoaderData();
  const filteredData = _.filter(data, ({ id }) => id === param.id);
  const characterDetail = filteredData[0].attributes;

  return (
    <div className="bg-black text-gray-200 min-h-screen p-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Character Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{characterDetail.name}</h1>
          {characterDetail.alias_names.length > 0 && (
            <p className="text-gray-400">
              Also known as: {characterDetail.alias_names.join(", ")}
            </p>
          )}

          <div className="text-sm space-y-2">
            <p>
              <span className="font-semibold">Blood Status:</span>{" "}
              {characterDetail.blood_status || "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Gender:</span>{" "}
              {characterDetail.gender || "Unknown"}
            </p>
            {characterDetail.jobs.length > 0 && (
              <p>
                <span className="font-semibold">Jobs:</span>{" "}
                {characterDetail.jobs.join(", ")}
              </p>
            )}
          </div>
        </div>

        {/* Character Image */}
        <div className="flex-1 flex justify-center">
          {characterDetail.image ? (
            <img
              src={characterDetail.image}
              alt={characterDetail.name}
              className="rounded-lg shadow-lg max-w-md object-cover"
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
