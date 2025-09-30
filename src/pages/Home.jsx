import { Link } from "react-router-dom";
import book_cover from "../assets/book-cover.jpg";
import characters_cover from "../assets/characters-cover.jpg";
import movie_cover from "../assets/movie-cover.jpg";
import potion_cover from "../assets/potion-cover.jpg";
import spells_cover from "../assets/spells-cover.jpg";

export default function Home() {
  return (
    <main className="text-center p-6 max-w-6xl mx-auto">
      {/* Hero Title */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-harry text-yellow-200 drop-shadow-lg">
          Harry Potter Fan Page
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Explore the magical world of Harry Potter
        </p>
      </div>

      {/* Search Bar */}
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
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Movies */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
          <img
            src={movie_cover}
            alt="Harry Potter Movies"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Movies</h2>
            <p className="text-gray-400 text-sm mt-1">
              The dare potterderforw, and the protected pris penectbug.
            </p>
            <Link
              to="movies"
              className="text-yellow-400 hover:underline block mt-2"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* Books */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
          <img
            src={book_cover}
            alt="Harry Potter Books"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Books</h2>
            <p className="text-gray-400 text-sm mt-1">
              Then elue nnsetting in the aootric toire ligesettag.
            </p>
            <Link
              to="books"
              className="text-yellow-400 hover:underline block mt-2"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* Characters */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
          <img
            src={characters_cover}
            alt="Harry Potter Characters"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Characters</h2>
            <p className="text-gray-400 text-sm mt-1">
              Chending sectio petua for drebes and del epstebion.
            </p>
            <Link
              to="characters"
              className="text-yellow-400 hover:underline block mt-2"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* Spells */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
          <img
            src={spells_cover}
            alt="Harry Potter Spells"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Spells</h2>
            <p className="text-gray-400 text-sm mt-1">
              Then giwst iomaad theavansd foenetnics teiting occatinds.
            </p>
            <Link
              to="spells"
              className="text-yellow-400 hover:underline block mt-2"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* Potions */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
          <img
            src={potion_cover}
            alt="Harry Potter Potions"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Potions</h2>
            <p className="text-gray-400 text-sm mt-1">
              Then sucing lervatioflhare ate prciscated ente potitodes.
            </p>
            <Link
              to="potions"
              className="text-yellow-400 hover:underline block mt-2"
            >
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
