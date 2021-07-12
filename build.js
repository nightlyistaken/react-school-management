// We're using Node.js here so that we can build our React into HTML.
// Ok `require` is like import in JS.
// so we use estrella module to build our JSX into HTML.
// build function does that... 
// cliopts stands for CLI options (command line options)
const { build, cliopts } = require("estrella");

// Here we call the build function..
build({
 // We pass it the entry point for out JSX file.
  entry: "index.jsx",
  // We tell it our final output file.
  outfile: "build/build.js",
  // We tell it to bundle.
  bundle: true,
  // This is optional...minify means remove comments and whitespace from code.
  minify: true,
  // This is optional too...sourcemaps help us debug our code. You will learn about them later.
  sourcemap: false,
  loader: {
    ".js": "jsx",
  },
});