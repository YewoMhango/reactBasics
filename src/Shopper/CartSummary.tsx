import React from "react";
import { formatDecimal } from "./Shopper";

export default function CartSummary({
  totalCost,
  totalItems,
  onClick,
}: {
  totalCost: number;
  totalItems: number;
  onClick: () => void;
}) {
  return (
    <div className="cart-summary" onClick={onClick}>
      <svg
        width="13.903mm"
        height="11.829mm"
        version="1.1"
        viewBox="0 0 13.903 11.829"
        xmlns="http://www.w3.org/2000/svg"
        color="inherit"
      >
        <g transform="translate(-113.6 -116.89)" color="inherit">
          <path
            d="m114.1 116.89c-0.27612-1.3e-4 -0.50007 0.22359-0.50023 0.49971-1.2e-4 0.27632 0.22391 0.50035 0.50023 0.50022h1.8262l0.17777 0.65629 1.4816 5.5356-0.37827 1.4133h-0.26562c-0.65481 0.0117-0.65481 0.98822 0 0.99994h8.9958c0.27612 1.3e-4 0.50007-0.22359 0.50023-0.49971 1.3e-4 -0.27632-0.22391-0.50036-0.50023-0.50023h-7.6972l0.26458-0.98547 8.5933-0.92198c0.23442-0.0458 0.40369-0.25103 0.40411-0.48989v-4.6808c-1.9e-4 -0.27611-0.22412-0.49981-0.50023-0.49971h-10.032l-0.17622-0.65835c-0.0592-0.21783-0.25693-0.36901-0.48265-0.36897zm3.9383 9.771c-0.56861-2.2e-4 -1.0296 0.46079-1.0294 1.0294 7e-5 0.56841 0.46099 1.0291 1.0294 1.0289 0.5682-8e-5 1.0288-0.46068 1.0289-1.0289 2.2e-4 -0.5684-0.46047-1.0293-1.0289-1.0294zm7.2564 0c-0.56841 7e-5 -1.0291 0.46099-1.0289 1.0294 7e-5 0.56821 0.46067 1.0288 1.0289 1.0289 0.56841 2.2e-4 1.0293-0.46047 1.0294-1.0289 2.2e-4 -0.56861-0.46079-1.0296-1.0294-1.0294z"
            fill="currentColor"
            color="inherit"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      {totalItems} {totalItems === 1 ? "item" : "items"} ($
      {formatDecimal(totalCost)})
    </div>
  );
}
