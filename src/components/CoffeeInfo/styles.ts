import styled from "styled-components";

export const CoffeeCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;

  width: 256px;
  height: 310px;
  padding: 10px;

  border-radius: 10px 10%;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    margin: -20px auto 0 auto;
  }

  div {
    margin: -8px auto 0 auto;
  }

  .tag {
    padding: 5px 10px;
    border-radius: 20px;
    margin: -12px auto 0 auto;

    line-height: ${({ theme }) => theme.fonts.roboto.tags.default.lineHeight};
    font-size: ${({ theme }) => theme.fonts.roboto.tags.default.fontSize};
    font-weight: ${({ theme }) => theme.fonts.roboto.tags.default.fontWeight};

    background-color: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.baloo2.family};
    line-height: ${({ theme }) => theme.fonts.baloo2.lineHeight};
    font-size: ${({ theme }) => theme.fonts.baloo2.text.s.fontSize};
    font-weight: ${({ theme }) => theme.fonts.baloo2.text.s.fontWeight};
  }

  .description {
    font-family: ${({ theme }) => theme.fonts.roboto.family};
    line-height: ${({ theme }) => theme.fonts.roboto.text.s.lineHeight};
    font-size: ${({ theme }) => theme.fonts.roboto.text.s.fontSize};
    font-weight: ${({ theme }) => theme.fonts.roboto.text.s.fontWeight};

    color: ${({ theme }) => theme.colors.baseLabel};
  }
`;

export const CoffeeManager = styled.div`
  display: flex;
`;

export const CoffeePrice = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0px;
  width: 67px;
  line-height: ${({ theme }) => theme.fonts.baloo2.lineHeight};

  .money-type {
    font-family: ${({ theme }) => theme.fonts.roboto.family};
    font-size: ${({ theme }) => theme.fonts.roboto.text.s.fontSize};
    font-weight: ${({ theme }) => theme.fonts.roboto.text.s.fontWeight};
  }

  .price {
    font-family: ${({ theme }) => theme.fonts.baloo2.family};
    font-size: ${({ theme }) => theme.fonts.baloo2.text.m.fontSize};
    font-weight: ${({ theme }) => theme.fonts.baloo2.text.m.fontWeight};
  }
`;

export const CoffeeQuantity = styled.div`
  display: flex;
  width: 140px;

  font-family: ${({ theme }) => theme.fonts.baloo2.family};
  line-height: ${({ theme }) => theme.fonts.baloo2.lineHeight};
  font-size: ${({ theme }) => theme.fonts.baloo2.text.xs.fontSize};
  font-weight: ${({ theme }) => theme.fonts.baloo2.text.xs.fontWeight};
`;

export const ButtonCar = styled.button`
  display: inline-flex;
  align-items: center;

  padding: 8px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purpleDark};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.purpleLight};
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
