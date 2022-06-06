import React from "react";
import { Item } from "./Item";
import { ItemDetails } from "./Shopper";

export default function ItemPage({
  items,
  addToCart,
}: {
  items: Array<ItemDetails>;
  addToCart: (itemId: number) => void;
}) {
  return (
    <table className="item-page">
      <tbody>
        {items.map((item) => (
          <Item details={item} key={item.id}>
            <button
              className="add-to-cart"
              onClick={() => addToCart(item.id)}
              disabled={item.cartAmmount > 0}
            >
              Add to cart
            </button>
          </Item>
        ))}
      </tbody>
    </table>
  );
}
