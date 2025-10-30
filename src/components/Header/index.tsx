import { useCart } from "../../contextAPI/CartContext";
import {
  HeaderContainer,
  LogoContainer,
  ButtonCarHeader,
  AddressInfo,
  CartAdressInfo,
} from "./styles";
import logoCoffee from "/logo.png";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  const { state } = useCart();
  const totalQuantity = state.items.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoContainer src={logoCoffee} alt="" />
      </NavLink>

      <CartAdressInfo>
        <AddressInfo>
          <MapPin weight="fill" size={15} />
          <p>Porto Alegre, RS</p>
        </AddressInfo>
        <ButtonCarHeader to="/checkout" className="nav-link">
          <ShoppingCart weight="fill" size={18} />
          <p className="circle-quantity">
            {totalQuantity}
          </p>
        </ButtonCarHeader>
      </CartAdressInfo>
    </HeaderContainer>
  );
}
