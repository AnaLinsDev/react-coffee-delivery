// src/components/TestButton.tsx
import styled from "styled-components";

export const HomeContainer = styled.main``;

export const HomePresentation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  #image-home {
    width: 29.75rem;
    height: 22.5rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .message-home {
    width: 37rem;
    margin-right: 1rem;
  }

  .benefits-home {
    display: grid;
    grid-template-columns: 1fr 1fr;

    margin-top: 4rem;
  }

  .title-home {
    color: ${({ theme }) => theme.colors.baseTitle};
    font-family: ${({ theme }) => theme.fonts.baloo2.family};
    line-height: ${({ theme }) => theme.fonts.baloo2.lineHeight};
    font-size: ${({ theme }) => theme.fonts.baloo2.text.xl.fontSize};
    font-weight: ${({ theme }) => theme.fonts.baloo2.text.xl.fontWeight};
  }

  .description-home {
    color: ${({ theme }) => theme.colors.baseSubtitle};
    line-height: ${({ theme }) => theme.fonts.roboto.text.l_regular.lineHeight};
    font-size: ${({ theme }) => theme.fonts.roboto.text.l_regular.fontSize};
    font-weight: ${({ theme }) => theme.fonts.roboto.text.l_regular.fontWeight};
  }
`;

export const IconContentHome = styled.div`
  display: flex;

  p {
    padding: 8px;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    line-height: ${({ theme }) => theme.fonts.roboto.text.m_regular.lineHeight};
    font-size: ${({ theme }) => theme.fonts.roboto.text.m_regular.fontSize};
    font-weight: ${({ theme }) => theme.fonts.roboto.text.m_regular.fontWeight};
  }
`;

interface IconHomeProps {
  variant?: "first" | "second" | "third";
}

export const IconHome = styled.div<IconHomeProps>`
  border-radius: 100%;
  padding: 8px;
  width: 32px;
  height: 32px;

  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "first":
        return theme.colors.yellowDark;
      case "second":
        return theme.colors.baseText;
      case "third":
        return theme.colors.yellow;
      default:
        return theme.colors.purple;
    }
  }};
`;

export const ListCoffees = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
  }

  h2 {
    margin-bottom: 2rem;
  }
`;
