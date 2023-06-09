/* eslint-disable array-callback-return */
import Card from "./Card";
import Loading from "./Loading";
import Spinner from "./Spinner";
import { useBeers } from "../hooks/useBeers";

export default function CardList(props) {
  const { data, error, loader } = useBeers(props.page, props.limit);
  if (loader) return <Spinner />;
  return (
    <>
      <div
        className={
          props.layout === "grid"
            ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 px-16 gap-3 center`
            : `flex-row p-8 px-4`
        }
      >
        {error && <span>{error}</span>}

        {data &&
          data.map((beer) => {
            return (
              <div key={beer.id}>
                {loader ? (
                  <Loading />
                ) : (
                  <Card
                    id={beer.id}
                    img={beer.image_url}
                    name={beer.name}
                    tagline={beer.tagline}
                    first={beer.first_brewed}
                    layout={props.layout}
                  />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}
