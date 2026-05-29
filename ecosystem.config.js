module.exports = {
  apps: [
    {
      name: "api-server",
      cwd: "./aserver",
      script: "index.js",
      watch: false, // Turn off watch in production to save resources
      env: {
        NODE_ENV: "dev",
      },
      env_production: {
        NODE_ENV: "prod",
      }
    },
    {
      name: "react-client",
      cwd: "./aclient",
      script: "serve", // Assuming you use 'serve' to host the build
      args: "-s build",
      env: {
        NODE_ENV: "dev",
      },
      env_production: {
        NODE_ENV: "prod",
      }
    },
  ],
};