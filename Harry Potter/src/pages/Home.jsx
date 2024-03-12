import { Link } from "react-router-dom"
export default function Home(){
    return(
        <main className="text-center relative top-40 max-w-2xl mx-auto">  
            <h1 className="capitalize text-3xl mb-4">explore the magical world of harry potter</h1>
            <div className="flex flex-col divide-y-2 rounded-lg">
                <Link className="bg-slate-500 hover:bg-blue-400 p-4 " to='movies'>Movies</Link>
                <Link className="bg-slate-500 hover:bg-blue-400 p-4 " to='books'>Books</Link>
                <Link className="bg-slate-500 hover:bg-blue-400 p-4 " to='characters'>Characters</Link>
                <Link className="bg-slate-500 hover:bg-blue-400 p-4 " to='spells'>Spells</Link>
                <Link className="bg-slate-500 hover:bg-blue-400 p-4 " to='potions'>Potions</Link>
            </div>
        </main>
    )
}