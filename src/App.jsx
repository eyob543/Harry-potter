import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components
import Layout from "./Components/Layout";
import ErrorElement from "./Components/Error";
//General Pages
import Home from "./pages/Home";
import Movies, { loader as moviesLoader } from "./pages/Movies";
import Books, { loader as booksLoader } from "./pages/Books";
import Characters, { loader as charactersLoader } from "./pages/Characters";
import Spells, { loader as spellsLoader } from "./pages/Spells";
import Potions, { loader as potionsLoader } from "./pages/Potions";
//Detail Pages
import MovieDetails, {
  loader as movieDetailsLoader,
} from "./pages/Detail pages/MovieDetails";
import BookDetails, {
  loader as bookDetailsLoader,
} from "./pages/Detail pages/BookDetails";
import CharacterDetails, {
  loader as characterDetailsLoader,
} from "./pages/Detail pages/CharacterDetails";
import SpellDetails, {
  loader as spellDetailsLoader,
} from "./pages/Detail pages/SpellDetails";
import PotionDetails, {
  loader as potionDetailsLoader,
} from "./pages/Detail pages/PotionDetails";
export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movies",
          element: <Movies />,
          loader: moviesLoader,
        },
        {
          path: "movieDetails/:id",
          element: <MovieDetails />,
          loader: movieDetailsLoader,
        },
        {
          path: "books",
          element: <Books />,
          loader: booksLoader,
        },
        {
          path: "bookDetails/:id",
          element: <BookDetails />,
          loader: bookDetailsLoader,
        },
        {
          path: "characters",
          element: <Characters />,
          loader: charactersLoader,
        },
        {
          path: "characterDetails/:id",
          element: <CharacterDetails />,
          loader: characterDetailsLoader,
        },
        {
          path: "spells",
          element: <Spells />,
          loader: spellsLoader,
        },
        {
          path: "spellDetails/:id",
          element: <SpellDetails />,
          loader: spellDetailsLoader,
        },
        {
          path: "potions",
          element: <Potions />,
          loader: potionsLoader,
        },
        {
          path: "potionDetails/:id",
          element: <PotionDetails />,
          loader: potionDetailsLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}
