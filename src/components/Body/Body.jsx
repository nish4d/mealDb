import React, { useRef, useEffect, useState } from "react";
import CartBody from "../CartBody/CartBody";
import ShowCart from "../ShowCart/ShowCart";

const Body = () => {
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");
  const [cartData, setCartData] = useState([]);
  const [nameup, setNameup] = useState([])
  const handleClicks = () => {
    setUpdated(inputRef.current.value);
  };
  
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${updated}`)
      .then((res) => res.json())
      .then((data) => setCartData(data.meals));
  }, [updated]);
  // const setnames = [];
  const myfunctions = (name) => {
    
    const setnames =[...nameup,name]
    setNameup(setnames)
  };
  // console.log(nameup);

  return (
    <>
      <div className="text-center">
        <input
          className="p-1 rounded text-amber-600"
          ref={inputRef}
          type="text"
          id="message"
          name="message"
        />
        <button
          className="ml-3 bg-amber-600 px-4 py-1 rounded"
          onClick={handleClicks}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-12 m-6">
        <div className="col-span-8 grid grid-cols-3 gap-4">
          {cartData.map((data) => ( 
            <CartBody data={data} key={data.idMeal} func={myfunctions}></CartBody>
          ))}
        </div>
        <div className="col-span-4 text-center">
          <ShowCart name={nameup}></ShowCart>
        </div>
      </div>
    </>
  );
};

export default Body;
