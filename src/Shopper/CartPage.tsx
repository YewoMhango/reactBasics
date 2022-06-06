import React from "react";
import { Item } from "./Item";
import { ItemDetails } from "./Shopper";

export default function CartPage({
  items,
  incrementItem,
  decrementItem,
}: {
  items: Array<ItemDetails>;
  incrementItem: (itemId: number) => void;
  decrementItem: (itemId: number) => void;
}) {
  let numberOfItemsToDisplay = items.reduce(
    (previous, current) => current.cartAmmount + previous,
    0
  );

  return (
    <div className="cart-page">
      {numberOfItemsToDisplay > 0 ? (
        <table>
          <tbody>
            {items.map((item) =>
              item.cartAmmount > 0 ? (
                <Item details={item} key={item.id}>
                  <button
                    className="decrement"
                    onClick={() => decrementItem(item.id)}
                  >
                    <b>-</b>
                  </button>
                  <span className="ammount">
                    <b>{item.cartAmmount}</b>
                  </span>
                  <button
                    className="increment"
                    onClick={() => incrementItem(item.id)}
                  >
                    <b>+</b>
                  </button>
                </Item>
              ) : null
            )}
          </tbody>
        </table>
      ) : (
        <div className="no-items-yet">No items added yet</div>
      )}
    </div>
  );
}
