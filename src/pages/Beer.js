/* eslint-disable array-callback-return */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useBeer } from "../hooks/useBeer";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useQuery } from "react-query";

export default function Beer() {
  let params = useParams();
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["beer"],
    () => {
      axios
        .get(`https://api.punkapi.com/v2/beers/${params.beerId}`)
        .then((res) =>  res.data);
    }
  );
  // const { data, error, loader } = useBeer(params.beerId);

  if (isLoading) return <Spinner />;

  return (
    <div>
      {isError && <span>{error}</span>}
      {!data && (
        <button
          type="button"
          onClick={refetch}
          className="m-5 px-5 bg-gray-900 w-48 h-8 text-gray-100 text-center font-bold text-xl"
        >
          try again
        </button>
      )}
      {data &&
        data.map((a) => {
          return (
            <div key={a.id} className="grid grid-cols-1 md:grid-cols-2">
              <img src={a.image_url} alt={a.name} className="h-full p-16" />
              <div className="pt-20 text-start">
                <div className="pb-5">
                  <h1 className="font-bold text-4xl text-center">{a.name}</h1>
                  <p className="text-center font-semibold text-xl pb-2">
                    {a.tagline}
                  </p>
                  <p className="text-center px-2 font-semibold">
                    {a.description}
                  </p>
                  <div className="p-4 md:p-0 md:py-4">
                    <p>
                      contributor:{" "}
                      <span className="font-semibold">{a.contributed_by}</span>
                    </p>
                    <p>
                      first brewed:{" "}
                      <span className="font-semibold">{a.first_brewed}</span>
                    </p>
                    <p>
                      alcohol by volume:{" "}
                      <span className="font-semibold">{a.abv}</span>
                    </p>
                    <p>
                      standart refference method:{" "}
                      <span className="font-semibold">{a.srm}</span>
                    </p>
                    <p>
                      ph: <span className="font-semibold">{a.ph}</span>
                    </p>
                  </div>
                </div>
                <div className="p-4 md:p-0 md:py-4">
                  ingredients:
                  <p className="font-semibold">
                    malt:{" "}
                    {a.ingredients.malt.map((malt) => {
                      return (
                        <span key={Math.round(Math.random() * 10000)}>
                          {malt.name} ({malt.amount.value} {malt.amount.unit}),
                        </span>
                      );
                    })}
                  </p>
                  <p className="font-semibold">
                    hops:{" "}
                    {a.ingredients.hops.map((hops) => {
                      return (
                        <span key={Math.round(Math.random() * 10000)}>
                          {" "}
                          {hops.name} ({hops.amount.value} {hops.amount.unit}),
                        </span>
                      );
                    })}
                  </p>
                </div>
                <div className="p-4 md:p-0 md:py-4">
                  brewing method:
                  <p>
                    mash temperature:{" "}
                    {a.method.mash_temp.map((mash) => {
                      return (
                        <span key={Math.round(Math.random() * 10000)}>
                          {mash.temp.value + " " + mash.temp.unit}
                        </span>
                      );
                    })}
                  </p>
                  <p>
                    fermentation:{" "}
                    {a.method.fermentation.temp.value +
                      " " +
                      a.method.fermentation.temp.unit}
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          );
        })}
      <div className="m-5 px-5 bg-gray-900 w-48 h-8 text-gray-100 text-center font-bold text-xl">
        <Link to="/list">Go back</Link>
      </div>
    </div>
  );
}
