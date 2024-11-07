import { CartIcon } from "../../Icons/CartIcon/CartIcon";
import { ButtonLink } from "../Button/Button";
import "./CartButton.scss";

export const CartButton = () => {
  return (
    <ButtonLink className={"cart-button"}>
      <div className="cart-button__counter">0</div>
      <CartIcon className="additonal-icon" />
    </ButtonLink>
  );
};
