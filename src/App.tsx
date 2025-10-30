import { AppRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globals";
import { defaultTheme } from "./styles/themes/default";
import { CartProvider } from "./contextAPI/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <GlobalStyle />
        <AppRoutes />
      </CartProvider>
    </ThemeProvider>
  );
}
