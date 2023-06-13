/* eslint-disable array-callback-return */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBeer } from "../hooks/useBeer";
import Spinner from "../components/Spinner";

export default function Beer() {
  let params = useParams();
  const { data, error, loader } = useBeer(params.beerId);
  const [details, setDetails] = useState(false);
  const [name, setName] = useState();
  const [isCart, setCart] = useState(false);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items") || "[]");
    data.forEach((item) => {
      if (item === name) {
        setCart(true);
      }
    });

    data.forEach((x) => {
      if (x.name === name) {
        setCount(x.count);
      }
    });
  }, []);

  if (loader) return <Spinner />;
  return (
    <div>
      {error && <span>{error}</span>}
      {data &&
        data.map((a) => {
          return (
            <div
              key={a.id}
              className="flex justify-around"
              onLoad={() => {
                setName(a.name);
              }}
            >
              <div className="flex justify-start mt-16">
                <img src={a.image_url} alt={a.name} className="h-[40vh]" />
              </div>

              <div className="pt-20 text-start">
                <div className="pb-5">
                  <h1 className="font-bold text-5xl text-center cursor-pointer">
                    {a.name}
                  </h1>
                  <div className="h-1 w-full bg-black rounded-xl my-4" />
                  <p className="text-center font-semibold text-xl pb-2 cursor-pointer">
                    {a.tagline}
                  </p>
                  <p className="text-center px-2 font-semibold mt-32">
                    {a.description}
                  </p>
                  <div className="flex">
                    <div
                      className="cursor-pointer mt-8 bg-black text-white w-32 p-1 text-center mx-4 select-none"
                      onClick={() => {
                        details ? setDetails(false) : setDetails(true);
                      }}
                    >
                      {details ? "hide" : "show"} Details
                    </div>
                    <div
                      className="cursor-pointer mt-8 bg-black text-white w-32 p-1 text-center mx-4 select-none"
                      onClick={() => {
                        const old = JSON.parse(
                          localStorage.getItem("items") || "[]"
                        );
                        setCount(count + 1);
                        old.push({
                          name: a.name,
                          count: count,
                        });
                        if (count !== 0) {
                          old.forEach((x) => {
                            if (x.name === a.name) {
                              old.splice(old.indexOf(x), 1);
                            }
                          });
                        }

                        setCart(true);
                        localStorage.setItem("items", JSON.stringify(old));
                      }}
                    >
                      add to cart {isCart ? `(${count})` : ""}
                    </div>
                    <div
                      className="cursor-pointer mt-8 bg-[#ff0000] text-white w-32 p-1 text-center mx-4 select-none"
                      onClick={() => {
                        modal ? setModal(false) : setModal(true);
                      }}
                    >
                      empty cart
                    </div>
                  </div>
                  {details && (
                    <div>
                      <div className="p-4 md:p-0 md:py-4">
                        <p>
                          contributor:
                          <span className="font-semibold">
                            {a.contributed_by}
                          </span>
                        </p>
                        <p>
                          first brewed:
                          <span className="font-semibold">
                            {a.first_brewed}
                          </span>
                        </p>
                        <p>
                          alcohol by volume:
                          <span className="font-semibold">{a.abv}</span>
                        </p>
                        <p>
                          standart refference method:
                          <span className="font-semibold">{a.srm}</span>
                        </p>
                        <p>
                          ph: <span className="font-semibold">{a.ph}</span>
                        </p>
                      </div>
                      <div className="p-4 md:p-0 md:py-4">
                        ingredients:
                        <p className="font-semibold">
                          malt:
                          {a.ingredients.malt.map((malt) => {
                            return (
                              <span key={Math.round(Math.random() * 10000)}>
                                {malt.name} ({malt.amount.value}{" "}
                                {malt.amount.unit}),
                              </span>
                            );
                          })}
                        </p>
                        <p className="font-semibold">
                          hops:
                          {a.ingredients.hops.map((hops) => {
                            return (
                              <span key={Math.round(Math.random() * 10000)}>
                                {hops.name} ({hops.amount.value}{" "}
                                {hops.amount.unit}),
                              </span>
                            );
                          })}
                        </p>
                      </div>

                      <div className="p-4 md:p-0 md:py-4">
                        brewing method:
                        <p>
                          mash temperature:
                          {a.method.mash_temp.map((mash) => {
                            return (
                              <span key={Math.round(Math.random() * 10000)}>
                                {mash.temp.value + " " + mash.temp.unit}
                              </span>
                            );
                          })}
                        </p>
                        <p>
                          fermentation:
                          {a.method.fermentation.temp.value +
                            " " +
                            a.method.fermentation.temp.unit}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {modal ? (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setModal(false)}
                  ></div>
                  <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                      <div className="mt-3 sm:flex">
                        <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                          <h4 className="text-lg font-medium text-gray-800">
                            Remove All Items ?
                          </h4>
                          <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                            Are you sure you want to continue? All items will be
                            removed!
                          </p>
                          <div className="items-center gap-2 mt-3 sm:flex">
                            <button
                              className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                              onClick={() => {
                                setModal(false);
                                localStorage.removeItem("items");
                              }}
                            >
                              Remove
                            </button>
                            <button
                              className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                              onClick={() => setModal(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      <div className="m-5 px-5 bg-gray-900 w-48 h-8 text-gray-100 text-center font-bold text-xl">
        <Link to="/list">Go back</Link>
      </div>
    </div>
  );
}
