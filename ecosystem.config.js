module.exports = {
  apps: [
    {
      name: 'smile-web-staging',
      script: 'app.js',
      env_staging: {
        NODE_ENV: 'staging',
        // Add other staging environment variables here
      },
    },
    {
      name: 'smile-web-production',
      script: 'app.js',
      env_production: {
        NODE_ENV: 'main',
        // Add other production environment variables here
      },
    },
  ],
};
