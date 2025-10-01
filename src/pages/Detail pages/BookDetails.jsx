import { useLoaderData, useParams } from "react-router-dom";
import fetcher from "../../fetch";
import _ from "lodash";

export function loader() {
  return fetcher("https://api.potterdb.com/v1/books");
}

export default function BookDetails() {
  const param = useParams();
  const data = useLoaderData();
  const filteredData = _.filter(data, ({ id }) => id === param.id);
  const bookDetail = filteredData[0].attributes;
  const relatedBooks = _.filter(data, ({ id }) => id !== param.id);
  return (
    <div className="bg-black text-gray-200 min-h-screen p-6 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Details */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">{bookDetail.title}</h1>
            <p className="text-lg text-gray-400">by {bookDetail.author}</p>

            {/* Book Info */}
            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold">Release Date: </span>
                {bookDetail.release_date}
              </p>
              <p>
                <span className="font-semibold">Pages: </span>
                {bookDetail.pages}
              </p>
            </div>

            {/* Buttons (could link to more content later) */}
            <div className="flex gap-4 mt-4">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400">
                📖 Read More
              </button>
              <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700">
                + Add to Collection
              </button>
            </div>
          </div>

          {/* Book Cover */}
          <div className="flex-1 flex justify-center">
            <img
              src={bookDetail.cover}
              alt={`${bookDetail.title} cover`}
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-300 leading-relaxed">{bookDetail.summary}</p>
        </div>

        {/* related books */}

        {/* Related Movies */}
        <div className="mt-10 w-full">
          <h2 className="text-2xl font-semibold mb-4">Related Movies</h2>
          <div className="flex gap-6 ">
            {relatedBooks.slice(0, 6).map((book) => {
              const details = book.attributes;
              return (
                <a
                  key={book.id}
                  href={`/books/${book.id}`}
                  className="flex-shrink-0 w-48 bg-zinc-800 rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  <img
                    src={details.cover}
                    alt={details.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <div className="p-3">
                    <p className="text-lg font-medium truncate">
                      {details.title}
                    </p>
                    <p className="text-sm text-zinc-400">
                      {details.release_date}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
