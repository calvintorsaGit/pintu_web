const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app =>{
    app.use(
        createProxyMiddleware('/wallet/supportedCurrencies',
            {
                target:'https://api.pintu.co.id/v2',
                changeOrigin: true
            })
    )

    app.use(
        createProxyMiddleware('/trade/price-changes',
            {
                target:'https://api.pintu.co.id/v2',
                changeOrigin: true
            })
    )
}

