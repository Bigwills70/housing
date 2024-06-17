import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteProductromCart,
  removeFrmCart,
} from "../Rdux/cartSlice";

function CartItems() {
  const dispatch = useDispatch();
  const cartLists = useSelector((state) => state.cart.itemLists);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  return (
    <div>
      cart item <br />
      {cartLists.length < 1 ? (
        "No Products in cart"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Quantity</th>
              <th scope="col">Product Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartLists.map((item) => {
              return (
                <>
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td> {item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.totalPrice}</td>
                    <td>
                      <button>
                        <FaMinus
                          onClick={() => dispatch(removeFrmCart(item.id))}
                        />
                      </button>

                      <button
                        onClick={() => dispatch(deleteProductromCart(item.id))}
                      >
                        <FaTrash />
                      </button>
                      <button>
                        <FaPlus
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                              })
                            )
                          }
                        />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CartItems;
