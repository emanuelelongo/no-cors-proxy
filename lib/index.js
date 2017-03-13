const http = require('http')
const url = require('url');
const httpProxy = require('http-proxy')

class NoCorsProxy {
    constructor(port, host, target) {
        this.config = {
            port:  port || 3000,
            host: host || 'localhost',
            target: target || 'http://localhost',
        }
        this.config.targetHost = url.parse(this.config.target).hostname;
        this.proxy = httpProxy.createProxyServer({})
    }

    start() {
        this.proxy.on('proxyReq', (proxyReq, req, res, options) => {
            proxyReq.setHeader('Host', this.config.targetHost)
        })

        this.proxy.on('proxyRes', function (proxyRes, req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*')
        })

        const server = http.createServer((req, res) => {
            if(req.method === 'OPTIONS') {
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
                res.end()
            }

            this.proxy.web(req, res, {
                target: this.config.target,
                secure: false
            })
        })

        server.listen(this.config.port, this.config.host)
    }
}

module.exports = NoCorsProxy
