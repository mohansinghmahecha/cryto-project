const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.coingecko.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Removes '/api' from the URL path
            },
        })
    );
};
