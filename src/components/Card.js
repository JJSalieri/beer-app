import { Link } from "react-router-dom"

export default function Card(props){
    return(<div className="bg-slate-200 w-72 text-center">
        <Link to={`/beer/${props.id}`}>
        <div className="flex justify-center pt-5 cursor-pointer">
         <img src={props.img} alt={props.name} className="h-64"/>
         </div>
         <h1 className="pt-5 pb-5 text-2xl font-bold cursor-pointer">{props.name}</h1>
         </Link>
         <h2 className="px-3 pb-5 text-sm font-semibold ">{props.tagline}</h2>
         <h3 className="text-sm font-semibold">since {props.first}</h3>
    </div>)
}