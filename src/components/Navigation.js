import { Link } from "react-router-dom"

export default function Nav(){
    return(<ul className="flex w-screen bg-gray-600 h-12 items-center p-4 text-white font-bold uppercase text-sm">
        <li><Link to='/'>Home</Link></li>
        <li className="ml-8"><Link to='/list'>List</Link></li>
    </ul>)
}