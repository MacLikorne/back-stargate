const express = require('express')
const cors = require('cors')
const registerStargateController = require('./controllers/stargate.controller')

const app = express()
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
const baseRoute = "/api"
registerStargateController(app, baseRoute)
const port = 3002

app.listen(port, () => console.log(`Stargate API running on port ${port}`))
