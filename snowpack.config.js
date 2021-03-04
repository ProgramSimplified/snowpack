// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* way ① Bundling with Webpack */
    // ['@snowpack/plugin-webpack', {}]
  ],
  /* way ② Bundling with esbuild  */
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: 'es2018',
  //   treeshake: true,
  // },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
