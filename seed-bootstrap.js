require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
    // Add any additional Babel config here if needed
  });
  
  require('./server/seeders/seed');
  