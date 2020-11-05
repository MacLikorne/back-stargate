const stargateService = require('../services/stargate.service')

module.exports = (app, baseRoute) => {
    app.post(`${baseRoute}/stargate`, (req, res) => {
        res.send(stargateService.getDirection(req.body.gate, req.body.ticket))
    })
}