import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import fetcher from "../fetch";
import Display from "../Components/Display";
import _ from "lodash";
export function loader() {
  return fetcher("https://api.potterdb.com/v1/books");
}
export default function Books() {
  const [search, setSearch] = useState("");

  const data = useLoaderData();
  function handleChange(e) {
    const input = e.target.value;
    setSearch(input);
  }

  const filteredData = data.filter((value) =>
    _.includes(value.attributes.title.toLowerCase(), search.toLowerCase()),
  );

  return (
    <>
      <h1 className="text-center text-4xl font-semibold">Books</h1>

      <div className="flex justify-center mb-12">
        <div className="flex items-center w-full max-w-2xl bg-yellow-100 rounded-full shadow-lg px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search for anything in the Wizarding World..."
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500"
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
      {search ? (
        <Display to={"bookDetails"} data={filteredData} />
      ) : (
        <Display to={"bookDetails"} data={data} />
      )}
    </>
  );
}
