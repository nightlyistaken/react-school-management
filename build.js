const { build, cliopts } = require("estrella");
const path = require("path");

build({
  entry: "index.jsx",
  outfile: "build/build.js",
  bundle: true,
  minify: true,
  sourcemap: false,
  loader: {
    ".js": "jsx",
  },
});
