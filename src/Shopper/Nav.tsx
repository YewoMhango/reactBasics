import React from "react";
import CartSummary from "./CartSummary";
import { PageName } from "./Shopper";

export default function Nav({
  pages,
  selected,
  setPage,
  totalCost,
  totalItems,
}: {
  pages: Array<PageName>;
  selected: PageName;
  setPage: (page: PageName) => void;
  totalCost: number;
  totalItems: number;
}) {
  return (
    <nav>
      <div>
        {pages.map((page, index) => (
          <NavButton
            key={index}
            selected={page === selected}
            onSelected={() => setPage(page)}
          >
            {page}
          </NavButton>
        ))}
      </div>
      <CartSummary
        totalCost={totalCost}
        totalItems={totalItems}
        onClick={() => setPage("Cart")}
      />
    </nav>
  );
}

function NavButton({
  children,
  selected,
  onSelected,
}: {
  children: string;
  selected: boolean;
  onSelected: () => void;
}) {
  return (
    <button
      style={{
        borderBottom: selected ? "3px orange solid" : "3px transparent solid",
      }}
      onClick={onSelected}
    >
      {children}
    </button>
  );
}
