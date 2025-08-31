const appConfig = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/astro_trade",
  dbName: "astro_trade_db",
  webUrl: process.env.WEB_URL || "http://localhost:3000",
};

console.log("App Config:", appConfig);

export default appConfig;
