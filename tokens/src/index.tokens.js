export default {
  global: {
    colors: {
      white: "#fff",
      gray10: "#eee",
      gray90: "#666",
      blue10: "rgb(237, 245, 255)",
      blue20: "rgb(208, 226, 255)",
    },
    spacing: {
      "spacing-01": "0.125rem",
      "spacing-02": "0.25rem",
    },
    layout: {
      "layout-01": "1rem",
      "layout-02": "1.5rem",
    },
  },
  typeSets: {
    "body-long-01": {
      "font-family": "'Roboto', sans-serif",
      "font-size": "14px",
      "line-height": "20px",
      "font-weight": "400",
      "letter-spacing": "0.16px",
    },
    "body-long-02": {
      "font-family": "'Roboto', sans-serif",
      "font-size": "16px",
      "line-height": "24px",
      "font-weight": "400",
    },
  },
  themes: {
    white: {
      "ui-background": "$global-colors-white",
      "ui-01": "$global-colors-gray-10",
      "ui-02": "$global-colors-white",
    },
    gray10: {
      "ui-background": "$global-colors-gray-10",
      "ui-01": "$global-colors-white",
      "ui-02": "$global-colors-gray-10",
    },
  },
};
