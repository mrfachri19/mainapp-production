const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(
      "/rest/pub/apigateway/jwt/getJsonWebToken?app_id=89eb6850-652d-40fd-8c51-9a8073f82426",
      {
        target: "https://apigwsit.telkom.co.id:7777",
        changeOrigin: true,
        secure: false,
      }
    )
  );
};
