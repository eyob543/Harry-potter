import { NavLink, Outlet } from "react-router-dom";
import hero_bg from "../assets/hero-bg.png";

export default function NavBar() {
  function activeLink(isActive) {
    return isActive
      ? "flex flex-col items-center text-yellow-300"
      : "flex flex-col items-center text-gray-300 hover:text-yellow-200 transition";
  }

  return (
    <>
      {/* Hero Header */}
      <header
        className="relative bg-cover bg-center h-[250px] flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${hero_bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navigation */}
        <nav className="relative z-10 flex flex-wrap justify-center space-x-8 gap-4">
          {/* Movies */}
          <NavLink
            to="movies"
            className={({ isActive }) => activeLink(isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
              <path d="m6.2 5.3 3.1 3.9"></path>
              <path d="m12.4 3.4 3.1 4"></path>
              <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
            </svg>
            <span className="text-sm">Movies</span>
          </NavLink>

          {/* Books */}
          <NavLink
            to="books"
            className={({ isActive }) => activeLink(isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M5 7a2 2 0 0 0-2 2v11"></path>
              <path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21"></path>
              <path d="M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10"></path>
            </svg>
            <span className="text-sm">Books</span>
          </NavLink>

          {/* Characters */}
          <NavLink
            to="characters"
            className={({ isActive }) => activeLink(isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              {/* Hat */}
              <path d="M4 14c2-4 6-7 8-10 2 3 6 6 8 10z"></path>
              {/* Face */}
              <circle cx="12" cy="16" r="2"></circle>
              {/* Beard */}
              <path d="M10 18c0 2 2 4 2 4s2-2 2-4"></path>
            </svg>
            <span className="text-sm">Characters</span>
          </NavLink>

          {/* Spells */}
          <NavLink
            to="spells"
            className={({ isActive }) => activeLink(isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M15 4V2"></path>
              <path d="M15 16v-2"></path>
              <path d="M8 9h2"></path>
              <path d="M20 9h2"></path>
              <path d="M17.8 11.8 19 13"></path>
              <path d="M15 9h.01"></path>
              <path d="M17.8 6.2 19 5"></path>
              <path d="m3 21 9-9"></path>
              <path d="M12.2 6.2 11 5"></path>
            </svg>
            <span className="text-sm">Spells</span>
          </NavLink>

          {/* Potions */}
          <NavLink
            to="potions"
            className={({ isActive }) => activeLink(isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              {/* Bottle neck */}
              <path d="M10 2h4v4h-4z"></path>
              {/* Bottle body */}
              <path d="M7 10c-1.5 2-2 4-2 6a7 7 0 0 0 14 0c0-2-0.5-4-2-6z"></path>
              {/* Liquid */}
              <path d="M9 14h6"></path>
              <path d="M9 17h6"></path>
            </svg>
            <span className="text-sm">Potions</span>
          </NavLink>
        </nav>
      </header>

      {/* Page Content */}
      <Outlet />
    </>
  );
}
