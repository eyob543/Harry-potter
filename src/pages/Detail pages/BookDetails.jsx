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

  return (
    <div>
      <div className="flex flex-col place-items-center">
        <p>{bookDetail.title}</p>
        <img
          className="aspect-auto max-w-xl rounded-2xl"
          src={`${bookDetail.cover}`}
          alt={`${bookDetail.title} cover`}
        />
        <p>Author {bookDetail.author}</p>
        <p>Release date{bookDetail.release_date}</p>
        <p>Summary {bookDetail.summary}</p>
        <p>Pages {bookDetail.pages}</p>
      </div>
    </div>
  );
}
