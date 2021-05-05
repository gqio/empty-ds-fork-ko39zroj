export const buildPath = "dist/";

export const icons = {
  transformGroup: "assets",
  buildPath,
  files: [
    {
      destination: "fonts.css",
      format: "css/fonts.css",
    },
  ],
};

export const css = {
  transformGroup: "css",
  buildPath,
  files: [
    {
      destination: "variables.css",
      format: "css/variables",
    },
  ],
};

export const scss = {
  transformGroup: "scss",
  buildPath,
  files: [
    {
      destination: "_variables.scss",
      format: "scss/variables",
    },
  ],
};

export const tokens = {
  transformGroup: "tokens",
  buildPath,
  files: [
    {
      destination: "tokens-definitions.js",
      format: "javascript/properties",
    },
  ],
};
