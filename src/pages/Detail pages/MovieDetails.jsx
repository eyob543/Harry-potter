import { useLoaderData, useParams } from "react-router-dom";
import Display from "../../Components/Display";

import fetcher from "../../fetch";
import _ from "lodash";

export function loader() {
  return fetcher("https://api.potterdb.com/v1/movies");
}

export default function MovieDetails() {
  const param = useParams();
  const data = useLoaderData();
  const relatedMovies = _.filter(data, ({ id }) => id !== param.id);
  console.log(relatedMovies);

  const filteredData = _.filter(data, ({ id }) => id === param.id);
  const movieDetail = filteredData[0].attributes;

  return (
    <div className="bg-black text-gray-200 min-h-screen p-6 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Details */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">{movieDetail.title}</h1>
            <p className="text-lg text-gray-400">
              Released: {movieDetail.release_date}
            </p>

            {/* Ratings (placeholder since API doesn’t have ratings) */}
            <div className="flex items-center space-x-2 text-yellow-400">
              <span>⭐</span>
              <span>4.5</span>
              <span className="text-gray-400">(120,000 Ratings)</span>
            </div>

            {/* Crew Info */}
            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold">Directors: </span>
                {movieDetail.directors.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Producers: </span>
                {movieDetail.producers.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Cinematographers: </span>
                {movieDetail.cinematographers.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Music: </span>
                {movieDetail.music_composers.join(", ")}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href={movieDetail.trailer}
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
              >
                ▶ Watch Trailer
              </a>
              <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700">
                + Add to Collection
              </button>
            </div>
          </div>

          {/* Poster */}
          <div className="flex-1 flex justify-center">
            <img
              src={movieDetail.poster}
              alt={movieDetail.title}
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Overview */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{movieDetail.summary}</p>
        </div>

        {/* Related Movies (placeholder for now) */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related Movies</h2>
          <Display to={"movieDetails"} data={relatedMovies} />
        </div>
      </div>
    </div>
  );
}
