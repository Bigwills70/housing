import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Rdux/cartSlice";

function Products({ id, name, price }) {
  const dispatch = useDispatch();

  const addToMyCart = () => {
    dispatch(addToCart({ id, name, price }));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="images/logo.png.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary" onClick={addToMyCart}>
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default Products;
