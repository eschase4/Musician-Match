module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current', // Allows Babel to transpile for the current version of Node.js
          },
          modules: 'commonjs', // Use CommonJS modules for Node.js compatibility
        },
      ],
      '@babel/preset-react', // Enables JSX and React support
    ],
  };
  