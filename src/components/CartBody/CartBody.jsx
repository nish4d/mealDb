import React, { useState } from "react";

const CartBody = (props) => {
    const toFunction = props.func;
//   console.log(props.data);
  const { idMeal, strMeal, strMealThumb, strArea } = props.data;
  // const [cart, seCart] = useState([])
  // console.log(props.data.strArea);
  return (
    <div className="">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strArea}</h2>
          <p>{strMeal}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>toFunction(props.data)} className="btn btn-primary">Add cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
