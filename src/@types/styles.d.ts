// src/styles/styled.d.ts
import "styled-components";
import { defaultTheme } from "../styles/themes/default";

// Cria um tipo com base no tema real
type ThemeType = typeof defaultTheme;

// Sobrescreve a interface DefaultTheme do styled-components
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
