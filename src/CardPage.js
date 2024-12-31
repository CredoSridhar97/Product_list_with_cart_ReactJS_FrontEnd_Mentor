import React, { useState } from "react";

function CardPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 5,
      name: "Product 5",
      price: 50,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 6,
      name: "Product 6",
      price: 60,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 7,
      name: "Product 7",
      price: 70,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 8,
      name: "Product 8",
      price: 80,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 9,
      name: "Product 9",
      price: 90,
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400",
    },
    // { id: 10, name: 'Product 10', price: 100, img: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3NlcnR8ZW58MHx8fHwxNjg4NzY3Mzg3&ixlib=rb-1.2.1&q=80&w=400'},
  ]);
  const [cart, setCart] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  const addToCart = (product) => {
    setCart((prevCount) => {
      const existingProduct = prevCount.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCount.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCount, { ...product, quantity: 1 }];
      }
    });
  };

  const decrementQuantity = (product) => {
    setCart((prevCount) => {
      const existingProduct = prevCount.find((item) => item.id === product.id);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCount.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCount.filter((item) => item.id !== product.id);
      }
    });
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  // const decrementQuantity = (product)=> {
  //   setCart(prevCount => (prevCount > 0 ? prevCount-1 : prevCount))
  // }

  return (
    <div className="product-whole-cont">
      <div className="product-container">
        {/* Product section starts */}

        <div className="sub-products-cont">
          <div className="desserts-grid">
            <h1>Desserts</h1>
          </div>
          {products.map((product) => (
            <div key={product.id} className="product">
              <>
                <img src={product.img} alt={product.name} />
              </>

              {cart.find((item) => item.id === product.id) ? (
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(product)}>
                    <span>-</span>
                  </button>
                  <span className="prod-quantity">
                    {cart.find((item) => item.id === product.id)?.quantity || 0}{" "}
                    {product.quantity}
                  </span>
                  <button onClick={() => addToCart(product)}>
                    <span>+</span>
                  </button>
                </div>
              ) : (
                <div className="btn-container">
                  {" "}
                  <button
                    className="cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to
                    Cart
                  </button>
                </div>
              )}

              <h2>{product.name}</h2>
              <p>Rs.{product.price}</p>
            </div>
          ))}
        </div>
        {/* Product section ends */}
        {/* Your Cart section starts */}
        <div className="cart">
          {/* Your Cart inner section starts */}
          <div className="cart-innercont">
            <h2>Your Cart ({cart.length})</h2>
            {cart.length === 0 ? (
              <p>Your added items will appear here.</p>
            ) : (
              <ul>
                {cart.map((product, index) => (
                  <li key={index}>
                    <> {product.name}</>
                    <div>

                      <span className="flt-left">{product.quantity}x Rs.{product.price}</span>
                     <span className="flt-right">{product.quantity * product.price}</span> 
                    </div>
                  </li>
                ))}
                <div className="order-total">
                  <span style={{ float: "left" }}>Order Total</span>
                  <span style={{ float: "right" }}>Rs.{getTotalPrice()}</span>
                </div>
                <div className="primary-btn">
                  <button onClick={openModal}>Confirm Order</button>
                </div>
              </ul>
            )}
          </div>
          {/* Your Cart inner section ends */}
        </div>
        {/* Your Cart section ends */}
        {/**Modal Window starts here */}
        {isModalOpen && (
          <div className="modal-overlay">
            
            <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <i class="fa-regular fa-circle-check"></i>
            </button>
            <div className="txt-cont">  Order Confirmed we hope you enjoyed the food</div>
              <div className="cart-innercont">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index}>
                      <div> {product.name}</div>
                      <div>
                        <span className="flt-left">
                          {product.quantity} * Rs.{product.price}
                        </span>
                        <span className="flt-right">                          
                          {product.quantity * product.price}
                        </span>
                      </div>
                    </li>
                  ))}
                  <li>
                  <div  className="txt-cont">
                  
                  <span className="flt-left">Order Total</span>
                  <span className="flt-right">Rs.{getTotalPrice()}</span>
                </div>
                  </li>
                </ul>
               
              </div>
              <div className="primary-btn">
                <button onClick={closeModal}>Start New order</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardPage;
