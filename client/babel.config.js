module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          // Specify the browsers you want to support
          browsers: ["last 2 versions", "not dead", "> 0.2%"], 
        },
        modules: 'auto', // Enable automatic ECMAScript module transformation based on environment
        useBuiltIns: "usage", // Polyfills the features needed for the specified targets
        corejs: 3, // Specify the core-js version for polyfilling
      },
    ],
    '@babel/preset-react', // Enables JSX and React support
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import', // Add this plugin for dynamic import() support
  ],
};
