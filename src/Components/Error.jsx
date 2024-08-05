import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
export default function Error() {
  return (
    <>
      <h1>Oops the page you were looking for was not found</h1>
      <div className="hover:underline">
        <ArrowBack />
        <Link to="/">Back to home</Link>
      </div>
    </>
  );
}
