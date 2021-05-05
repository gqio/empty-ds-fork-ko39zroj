// const fontSources = ({ otf, ttf, svg, woff, woff2 }) => {
//   const sources = [];
//   svg &&
//     sources.push(
//       `url('${svg.value}#${name.value.replace(/ /g, "%20")}') format('svg')`
//     );
//   otf && sources.push(`url('${otf.value}') format('otf')`);
//   ttf && sources.push(`url('${ttf.value}') format('truetype')`);
//   woff && sources.push(`url('${woff.value}') format('woff')`);
//   woff2 && sources.push(`url('${woff2.value}') format('woff2')`);
//   return sources;
// };

// const formatTemplate = (font) => `@font-face {
//   font-family: ${font?.name?.value};
//   src:  ${fontSources(font).join(",\n\t")};
//   ${font.style ? `font-style:${font.style.value};` : ""}
//   ${font.weight ? `font-weight:${font.weight.value};` : ""}
// }
// .${font?.name?.value.toLowerCase()} {
//   font-family: ${font?.name?.value};
//   ${font.style ? `font-style:${font.style.value};` : ""}
//   ${font.weight ? `font-weight:${font.weight.value};` : ""}
//   line-height: 1;
//   letter-spacing: normal;
//   text-transform: none;
//   display: block;
//   white-space: nowrap;
//   word-wrap: normal;
//   direction: ltr;
//   -webkit-font-feature-settings: 'liga';
//   -webkit-font-smoothing: antialiased;
// }`;

export default {
  name: "css/fonts.css",
  formatter: ({ properties }) => {
    // const fonts = properties?.asset?.font;
    // if (!fonts) return;
    // return Object.values(fonts).map(formatTemplate).join("\n");
  },
};
