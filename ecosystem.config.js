module.exports = {
  apps: [
    {
      name: 'smile-app-staging', // Change as needed
      script: './app.js',      // Entry point of your application
      env: {
        NODE_ENV: 'staging',
      },
    },
    {
      name: 'smile-app-production', // Change as needed
      script: './app.js',        // Entry point of your application
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
