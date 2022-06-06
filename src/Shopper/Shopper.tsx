import React, { useState } from "react";
import CartPage from "./CartPage";
import ItemPage from "./ItemPage";
import Nav from "./Nav";
import "./css/Shopper.css";
import { SHOP_ITEMS } from "./SHOP_ITEMS";

export default function Shopper() {
  let [selectedPage, setPage]: NavPagesHook = useState<PageName>("Items");
  let [items, setItems] = useState<Array<ItemDetails>>(SHOP_ITEMS);

  const addToCart = (itemId: number): void =>
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, cartAmmount: 1 } : item
      )
    );

  const decrementItem = (itemId: number): void =>
    setItems(
      items.map((item) =>
        item.id === itemId
          ? { ...item, cartAmmount: item.cartAmmount - 1 }
          : item
      )
    );

  const incrementItem = (itemId: number): void =>
    setItems(
      items.map((item) =>
        item.id === itemId
          ? { ...item, cartAmmount: item.cartAmmount + 1 }
          : item
      )
    );

  return (
    <div className="shopper">
      <Nav
        pages={["Items", "Cart"]}
        selected={selectedPage}
        setPage={setPage}
        totalCost={getTotalItemsCost(items)}
        totalItems={getTotalItemsCount(items)}
      />
      {selectedPage === "Items" && (
        <ItemPage items={items} addToCart={addToCart} />
      )}
      {selectedPage === "Cart" && (
        <CartPage
          items={items}
          decrementItem={decrementItem}
          incrementItem={incrementItem}
        />
      )}
    </div>
  );
}

export function formatDecimal(n: number): string {
  let result = n.toString();

  let positionOfDecimal = result.indexOf(".");

  let i = result.length - 3;

  if (positionOfDecimal !== -1) {
    result = result.slice(0, positionOfDecimal + 3);
    i = positionOfDecimal - 3;
  }

  while (i > 0) {
    result = result.slice(0, i) + "," + result.slice(i);
    i -= 3;
  }

  return result;
}

console.log(formatDecimal(123456789.1));

export function getTotalItemsCost(items: ItemDetails[]): number {
  return items.reduce(
    (previous, current) => current.price * current.cartAmmount + previous,
    0
  );
}

export function getTotalItemsCount(items: ItemDetails[]): number {
  return items.reduce((previous, current) => current.cartAmmount + previous, 0);
}

export type PageName = "Items" | "Cart";

type NavPagesHook = [PageName, React.Dispatch<React.SetStateAction<PageName>>];

export type ItemDetails = {
  id: number;
  price: number;
  imageUrl: string;
  name: string;
  description: string;
  cartAmmount: number;
};
