import fontFormat from "./font-format.js";
import { icons, css, scss, tokens, buildPath } from "./platform.js";
import path from "path";

const load = (registry, ...imports) =>
  registry
    .loadUmdUrl(url(imports, "__style_dictionary__"))
    .then(() => globalThis["__style_dictionary__"])
    .finally(() => delete globalThis["__style_dictionary__"]);

let StyleDictionary;
export async function compile({
  input, // **/*tokens.js (in dist)
  registry,
  tree,
}) {
  // debugger;
  if (!StyleDictionary) {
    await importScriptsWithContext(
      "http://localhost:9000/packd/@draft-gq/style-dictionary@3.0.11?nominify&format=umd&name=__style_dictionary__",
      () => {},
      () => {}
    );
    StyleDictionary = globalThis["__style_dictionary__"].packd_export_0.default;
  }
  const config = StyleDictionary.registerFormat(fontFormat).extend({
    platforms: { css, scss },
  });
  StyleDictionary.outputFile = (key, content) => {
    const outputFile = key.replace(new RegExp(`^${buildPath}`), dir);
    outputTree[outputFile] = content;
  };
  const outputTree = {};
  for (const file in input) {
    const dir = path.dirname(file).replace(/src$/, "dist/");
    const moduleFile = await registry.loadFile(file, tree);
    config.extend({ properties: moduleFile.default }).buildAllPlatforms();
  }
  return outputTree;
}
