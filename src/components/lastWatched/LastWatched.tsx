import React, { useContext, useState, useEffect } from "react";
import { LatelyWatchedContext } from "../../contexts/LatelyWatchedContext";
import { LastWatchedInterface } from "../../interfaces/LastWatchedInterface";
import "../../styles/lastWatchedStyles/lastWatched.scss";
import LastWatchedProduct from "./LastWatchedProduct";

const LastWatched: React.FC = () => {
  const [lastWatched, setLastWatched] = useState<LastWatchedInterface[]>([])
  const lasties = useContext(LatelyWatchedContext);

  useEffect(() => {
    setLastWatched(lasties)
  }, [lasties])


  return (
    <div>
      <p className="info">Lately watched</p>
      <div className="lastWatchedDiv">
        {lastWatched.map(product => {
          return (
            <LastWatchedProduct name={product.name} img={product.img} price={product.price} category={product.category} id={product.id} />
          )
        })}
      </div>
    </div>
  );
};

export default LastWatched;
