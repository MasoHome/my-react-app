module.exports = {
  apps: [
    {
      name: "aclient",
      cwd: "./aclient",
      script: "npm",
      args: "start", // or whatever your build/start script is
    },
    {
      name: "aserver",
      cwd: "./aserver",
      script: "index.js", // The entry point for your server
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};