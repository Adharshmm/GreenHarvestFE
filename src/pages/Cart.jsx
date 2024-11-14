import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFromCart, emptyCart, getAllCartItems } from "../Redux/cartSlice";
import { toast } from "react-toastify";
import Header from "../components/Header";


function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: cartItems, grandTotal } = useSelector((state) => state.cartReducer);

  // Handler for deleting a specific item from the cart
  const handleDelete = (itemId) => {
    dispatch(deleteFromCart(itemId)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Item removed from cart");
      } else {
        toast.error("Failed to delete item from cart");
      }
    });
  };

  // Handler for emptying the entire cart
  const handleEmptyCart = () => {
    dispatch(emptyCart()).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Cart emptied successfully");
      } else {
        toast.error("Failed to empty the cart");
      }
    });
  };

  // Handler for checkout
  const handleCheckout = () => {
    toast.success("Your order is placed!");
    handleEmptyCart(); // Empty the cart after checkout
    navigate("/");
  };

  useEffect(() => {
    console.log(cartItems)
    dispatch(getAllCartItems())
  }, [])

  return (
    <>
    <Header/>
      <div style={{ height: "100vh" }}>
        {cartItems?.length > 0 ? (
          <div style={{ marginTop: "8rem" }}>
            <div className="row w-100">
              <div className="col-lg-6 m-5">
                <table className="table shadow border">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Product Title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name.slice(0, 20)}</td>
                        <td>
                          <img
                            src={item.imageUrl}
                            style={{ width: "5rem", height: "5rem" }}
                            alt={item.name}
                          />
                        </td>
                        <td>${item.price}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-4">
                <div className="border shadow p-5 mt-5">
                  <h3 className="text-primary">Order Summary</h3>
                  <h5>
                    Total items:{" "}
                    <span className="text-warning">{cartItems.length}</span>
                  </h5>
                  <h5>
                    Total Price:{" "}
                    <span className="text-warning">{grandTotal}</span>
                  </h5>
                  <button
                    className="btn btn-success rounded w-100"
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ height: "70vh" }}
            className="d-flex align-items-center flex-column "
          >
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png" alt="Empty cart" />
            <p>Your cart is empty!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
