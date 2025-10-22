import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled.img`
  width: 85px;
  height: 40px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 10rem;
  height: 2.5rem;
`;

export const CartAdressInfo = styled.div`
  display: flex;
  gap: 12px;
`;

export const AddressInfo = styled.header`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 4px;

  min-width: 144px;
  height: 38px;
  padding: 8px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors["purple-dark"]};
  background-color: ${({ theme }) => theme.colors["purple-light"]};
`;

export const ButtonCarHeader = styled(NavLink)`
  display: inline-flex;
  align-items: center;

  padding: 8px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors["yellow-dark"]};
  background-color: ${({ theme }) => theme.colors["yellow-light"]};

  &:hover {
    color: ${({ theme }) => theme.colors["yellow"]};
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors["yellow"]};
  }
`;
