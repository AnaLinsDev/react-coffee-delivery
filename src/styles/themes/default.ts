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
        xl: { fontSize: "48px", fontWeight: 800 },
        l: { fontSize: "32px", fontWeight: 800 },
        m: { fontSize: "24px", fontWeight: 800 },
        s: { fontSize: "20px", fontWeight: 700 },
        xs: { fontSize: "18px", fontWeight: 700 },
      },
    },

    roboto: {
      family: "'Roboto', sans-serif",
      opticalSizing: "auto",
      style: "normal",

      text: {
        l: { fontSize: "20px", fontWeight: 600, lineHeight: "130%" },
        m: { fontSize: "16px", fontWeight: 600, lineHeight: "130%" },
        s: { fontSize: "14px", fontWeight: 400, lineHeight: "130%" },
        xs: { fontSize: "12px", fontWeight: 700, lineHeight: "130%" },
      },

      buttons: {
        large: { fontSize: "14px", fontWeight: 400, lineHeight: "160%" },
        medium: { fontSize: "12px", fontWeight: 700, lineHeight: "160%" },
      },

      tags: {
        default: { fontSize: "10px", fontWeight: 600, lineHeight: "130%" },
      },
    },
  },
};
