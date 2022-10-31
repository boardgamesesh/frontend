/** @type {import('@remix-run/dev').AppConfig} */
const { flatRoutes } = require("remix-flat-routes");

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "@apollo/client",
    "ts-invariant",
    "zen-observable-ts",
  ],
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes, {
      basePath: "/", // optional base path (defaults to /)
      ignoredRouteFiles: [], // same as remix config
    });
  },
};
