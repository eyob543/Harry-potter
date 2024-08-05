import { useLoaderData } from "react-router-dom";
import fetcher from "../fetch";
import Display from "../Components/Display";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import _ from "lodash";

export async function loader() {
  return await fetcher("https://api.potterdb.com/v1/movies");
}
export default function Movies() {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  function handleChange(e) {
    const input = e.target.value;
    setSearch(input);
  }

  const filteredData = data.filter((value) =>
    _.includes(value.attributes.title.toLowerCase(), search.toLowerCase()),
  );
  return (
    <>
      <h1 className="text-center text-4xl font-semibold">Movies</h1>
      <form className="flex justify-center items-start m-4  self-center">
        <input
          type="text"
          placeholder="search"
          className="bg-black max-w-32 focus-within:max-w-64  px-2"
          value={search}
          onChange={handleChange}
        />
        <CiSearch className="text-3xl" />
      </form>
      {search ? (
        <Display to={"movieDetails"} data={filteredData} />
      ) : (
        <Display to={"movieDetails"} data={data} />
      )}
    </>
  );
}
