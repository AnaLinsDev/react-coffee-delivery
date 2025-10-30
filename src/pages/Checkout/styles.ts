import styled from "styled-components";

export const CheckoutContent = styled.div`
  display: flex;
  padding: 4rem 0;
`;

export const CheckoutAddressPayment = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  margin: 0 1.75rem;
`;

export const CheckoutAddress = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 372px;
  margin-bottom: 1.25rem;
`;

export const CheckoutPayment = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 207px;
`;

export const CheckoutResume = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 448px;
  height: 498px;
`;

export const CheckoutCardCoffee = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;

  img {
    width: 64px;
    height: 64px;
    margin-right: 10px;
  }

  .price {
    width: 64px;
    justify-content: right;
  }
`;

export const InputQuantity = styled.input.attrs({
  type: "number",
  min: 0,
  max: 20,
  step: 1,
})`
  width: 72px;
`;
