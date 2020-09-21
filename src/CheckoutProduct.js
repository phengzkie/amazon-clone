import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt=""/>

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="p checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="div checkoutProduct_rating">
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
