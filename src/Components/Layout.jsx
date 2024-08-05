import { NavLink, Outlet } from "react-router-dom";
export default function HogwartsHouses() {
  function activeLink(isActive) {
    return isActive ? "bg-zinc-700  p-3 px-7" : "hover:bg-zinc-500 p-3 px-7";
  }

  return (
    <>
      <nav className="flex flex-wrap flex-col  p-4 sm:flex-row justify-center text-2xl ">
        <NavLink className={({ isActive }) => activeLink(isActive)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => activeLink(isActive)} to="movies">
          Movies
        </NavLink>
        <NavLink className={({ isActive }) => activeLink(isActive)} to="books">
          Books
        </NavLink>
        <NavLink
          className={({ isActive }) => activeLink(isActive)}
          to="characters"
        >
          Characters
        </NavLink>
        <NavLink className={({ isActive }) => activeLink(isActive)} to="spells">
          Spells
        </NavLink>
        <NavLink
          className={({ isActive }) => activeLink(isActive)}
          to="potions"
        >
          Potions
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
