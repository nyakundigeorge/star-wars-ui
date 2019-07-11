module.exports = {
    devServer : {
        proxy : {
            "^[/]{1}news/v3/content": {
                target: "https://api.nytimes.com/svc",
                ws: true,
                changeOrigin: true
            },
        }
    }
};