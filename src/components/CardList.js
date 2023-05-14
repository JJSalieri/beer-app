/* eslint-disable array-callback-return */
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function CardList(props) {
  const baseURL = `https://api.punkapi.com/v2/beers?page=${props.page}&per_page=${props.limit}`;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  });
  if (!data) return console.log("data is temporarily unaviable");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-8 px-12 gap-4">
      {data.map((beer) => {
        return <div key={beer.id}><Card id={beer.id} img={beer.image_url} name={beer.name} tagline={beer.tagline} first={beer.first_brewed}/></div>
      })}
    </div>
  );
}

//405