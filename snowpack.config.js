/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    "@snowpack/plugin-sass",
    // [
    //   "@snowpack/plugin-build-script",
    //   { "cmd": "postcss", "input": [".css"], "output": [".css"] }
    // ],
    // ["@snowpack/plugin-webpack"],
  ],
  buildOptions: {
    /* ... */
    baseUrl: '/logo-maker-editor',
    clean: true
  },
};
