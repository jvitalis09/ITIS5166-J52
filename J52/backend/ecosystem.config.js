module.exports = {
  apps: [
    {
      name: "j52-backend",
      script: "./server.js",
      env: {
        JWT_SECRET: "1234567890abcdef",
        NODE_ENV: "production"
      }
    }
  ]
}
