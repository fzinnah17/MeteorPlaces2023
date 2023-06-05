// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://maps.googleapis.com',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '/maps/api',
//       },
//     })
//   );
// };


// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/maps/api',
//     createProxyMiddleware({
//       target: 'https://maps.googleapis.com',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/maps/api': '/maps/api',
//       },
//     })
//   );
// };

// working fine

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware('/place', {
//       target: 'https://maps.googleapis.com/maps/api',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/place': '',
//       },
//     })
//   );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/place',
    createProxyMiddleware({
      target: 'https://maps.googleapis.com/maps/api',
      changeOrigin: true,
      pathRewrite: {
        '^/place': '',
      },
    })
  );
};


