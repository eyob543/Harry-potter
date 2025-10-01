import { Link } from "react-router-dom";
import movie_cover from "../assets/movies-cover.png";
import book_cover from "../assets/books-cover.png";
import characters_cover from "../assets/characters-cover.png";
import spells_cover from "../assets/spells-cover.png";
import potion_cover from "../assets/potions-cover.png";

export default function Home() {
  return (
    <main className="text-center p-6">
      {/* Hero Title */}
      <div>
        <h1 className="text-4xl md:text-5xl font-harry text-yellow-200 drop-shadow-lg">
          Harry Potter Fan Page
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Explore the magical world of Harry Potter
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Movies */}
        <div className="bg-gray-900 rounded-xl shadow-lg border border-yellow-200">
          <img
            src={movie_cover}
            alt="Harry Potter Movies"
            className="w-full object-cover "
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Movies</h2>
            <p className="text-gray-400 text-sm mt-1">
              Relive the magic of the Harry Potter films from the Philosopher’s
              Stone to the Deathly Hallows.
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
        <div className="bg-gray-900 rounded-xl shadow-lg border border-yellow-200">
          <img
            src={book_cover}
            alt="Harry Potter Books"
            className="w-full object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Books</h2>
            <p className="text-gray-400 text-sm mt-1">
              Discover J.K. Rowling’s original stories that brought the
              Wizarding World to life.
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
        <div className="bg-gray-900 rounded-xl  shadow-lg border border-yellow-200">
          <img
            src={characters_cover}
            alt="Harry Potter Characters"
            className="w-full object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Characters</h2>
            <p className="text-gray-400 text-sm mt-1">
              Meet your favorite witches, wizards, and magical creatures from
              Hogwarts and beyond.
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
        <div className="bg-gray-900 rounded-xl  shadow-lg border border-yellow-200">
          <img
            src={spells_cover}
            alt="Harry Potter Spells"
            className="w-full object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Spells</h2>
            <p className="text-gray-400 text-sm mt-1">
              Master iconic spells — from Expelliarmus to Wingardium Leviosa.
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
        <div className="bg-gray-900 rounded-xl  shadow-lg border border-yellow-200">
          <img
            src={potion_cover}
            alt="Harry Potter Potions"
            className="w-full object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Potions</h2>
            <p className="text-gray-400 text-sm mt-1">
              Explore magical brews and elixirs — from Polyjuice Potion to Felix
              Felicis.
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
