import "../src/index.js";
import { html } from "lit-html";

export default {
  parameters: {
    backgrounds: { default: "black" },
    layout: "centered",
  },
};

export const standard = () => html`<my-button>Test</my-button>`;

export const big = () => html`<my-button size="big">Test</my-button>`;

export const secondary = () =>
  html`<my-button variant="secondary">Test</my-button>`;
