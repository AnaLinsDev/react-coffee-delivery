export const defaultTheme = {
  colors: {
    yellow: "#DBAC2C",
    yellowLight: "#F1E9C9",
    yellowDark: "#C47F17",

    purple: "#8047F8",
    purpleLight: "#EBE5F9",
    purpleDark: "#4B2995",

    baseTitle: "#272221",
    baseSubtitle: "#403937",
    baseText: "#574F4D",
    baseLabel: "#8D8686",

    baseHover: "#D7D5D5",
    baseButton: "#E6E5E5",
    baseInput: "#EDEDED",
    baseCard: "#F3F2F2",

    background: "#FAFAFA",
    white: "#FFFFFF",
  },
  fonts: {
    baloo2: {
      family: "'Baloo 2', sans-serif",
      opticalSizing: "auto",
      style: "normal",
      lineHeight: "130%",

      text: {
        xl: { fontSize: "3rem", fontWeight: 800 }, // 48px
        l: { fontSize: "2rem", fontWeight: 800 }, // 32px
        m: { fontSize: "1.5rem", fontWeight: 800 }, // 24px
        s: { fontSize: "1.25rem", fontWeight: 700 }, // 20px
        xs: { fontSize: "1.125rem", fontWeight: 700 }, // 18px
      },
    },

    roboto: {
      family: "'Roboto', sans-serif",
      opticalSizing: "auto",
      style: "normal",

      text: {
        l_regular: { fontSize: "1.25rem", fontWeight: 400, lineHeight: "130%" }, // 20px
        m_regular: { fontSize: "1rem", fontWeight: 400, lineHeight: "130%" }, // 16px
        l_bold: { fontSize: "1.25rem", fontWeight: 700, lineHeight: "130%" }, // 20px
        m_bold: { fontSize: "1rem", fontWeight: 700, lineHeight: "130%" }, // 16px
        s: { fontSize: "0.875rem", fontWeight: 400, lineHeight: "130%" }, // 14px
        xs: { fontSize: "0.75rem", fontWeight: 700, lineHeight: "130%" }, // 12px
      },

      buttons: {
        large: { fontSize: "0.875rem", fontWeight: 400, lineHeight: "160%" }, // 14px
        medium: { fontSize: "0.75rem", fontWeight: 700, lineHeight: "160%" }, // 12px
      },

      tags: {
        default: { fontSize: "0.625rem", fontWeight: 700, lineHeight: "130%" }, // 10px
      },
    },
  },
};
