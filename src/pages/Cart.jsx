import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  // console.log(cart);
  const handleCart = () => {
    toast.success('Your order is placed!!!');
    dispatch(emptyCart());
    navigate('/');
  }
  return (
    <>
      {cart?.length > 0 ? (
        <div style={{ marginTop: "8rem" }}>
          <div className="row w-100">
            <div className="col lg-6 m-5">
              <table className="table shadow border">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Product Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item?.name?.slice(0, 20)}</td>
                      <td>
                        <img
                          src={item.imageUrl}
                          style={{ width: "5rem", height: "5rem" }}
                        />
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => dispatch(removeFromCart(item.id))}
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
                  <span className="text-warning">{cart?.length}</span>
                </h5>
                <h5>
                  Total Price :{" "}
                  <span className="text-warning">
                    $
                    {cart
                      ?.reduce(
                        (totalPrice, currentValue) =>
                          totalPrice + currentValue.price,
                        0
                      )
                      ?.toFixed(2)}
                  </span>
                </h5>
                <button className="btn btn-success rounded w-100" onClick={handleCart}>
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
          {/* <div className="display-5 d-flex justify-content-center me-5 mt-0">
            <p>
              Total:$
              {cart
                ?.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.price,
                  0
                )
                ?.toFixed(2)}
            </p>
          </div> */}
        </div>
      ) : (
        <div
          style={{ height: "70vh" }}
          className="d-flex align-items-center flex-column"
        >
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png" />
          <p>Your cart is empty!</p>
        </div>
      )}

    </>
  );
}

export default Cart;