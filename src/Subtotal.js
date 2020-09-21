import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  // Selector
  const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


  // This was my solution on the task.
  /*const getTotalBasket = () => {
     basket.map(b => {
       prices.push(b.price);
     })
   }

  getTotalBasket();

  const totalBasketPrice = prices.reduce((a, b) => a + b, 0); */

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length > 1 ? (`${basket.length} items`) : (`${basket.length} item`)}): <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
