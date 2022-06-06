import React from "react";
import { formatDecimal, ItemDetails } from "./Shopper";

export function Item({
  details,
  children,
}: {
  details: ItemDetails;
  children: React.ReactNode | Array<React.ReactNode>;
}) {
  return (
    <tr className="item">
      <td className="image-container">
        <img
          src={details.imageUrl}
          alt={`${details.name}`}
          className="item-image"
        />
      </td>
      <td className="text-details">
        <h4>{details.name}</h4>
        <div>{details.description}</div>
      </td>
      <td>
        <div className="right-details">
          <div className="price">${formatDecimal(details.price)}</div>
          <div className="children">{children}</div>
        </div>
      </td>
    </tr>
  );
}
