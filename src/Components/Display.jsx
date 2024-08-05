import { Link } from "react-router-dom";
import { error } from "../fetch";
import { ImageNotSupported } from "@mui/icons-material";
export default function Display({ data, to }) {
  if (error) return <p>{error}</p>;
  return (
    <main className="flex flex-wrap justify-center gap-x-10">
      {data.map(({ attributes, id }) => (
        <Link
          to={`/${to}/${id}`}
          className="max-w-sm align-middle hover:cursor-pointer"
          key={id}
        >
          {attributes.image || attributes.cover || attributes.poster ? (
            <img
              className="hover:scale-105 mx-auto w-min rounded-lg my-auto h-3/4"
              alt={`${attributes.name}`}
              src={attributes.image || attributes.cover || attributes.poster}
            />
          ) : (
            <ImageNotSupported />
          )}
          <h1 className="text-xl text-center hover:underline font-semibold">
            {attributes.name || attributes.title}
          </h1>
        </Link>
      ))}
    </main>
  );
}
