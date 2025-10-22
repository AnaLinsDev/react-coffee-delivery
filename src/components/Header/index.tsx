import { HeaderContainer, LogoContainer } from "./styles";
import logoCoffee from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer src={logoCoffee} alt="" />
      <div>
        <span>Local</span>
        <NavLink to="/">Link Here</NavLink>
      </div>
    </HeaderContainer>
  );
}
