import React from 'react';

import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { isCompositeComponent } from 'react-dom/test-utils';

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();

  const prices = [];

  const getTotalBasket = () => {
    basket.map(b => {
      prices.push(b.price);
    })
  }

  getTotalBasket();

  const totalBasketPrice = prices.reduce((a, b) => a + b, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              {/* part of the homework */}
              Subtotal ({basket.length > 1 ? (`${basket.length} items`) : (`${basket.length} item`)}): <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalBasketPrice} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
