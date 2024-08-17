'use strict'

//requires
const express = require('express')
const app = express()
const cors = require('cors')

const generateFileRoutes = require('./src/routing/file-gen-routing')

app.use(express.json())
const allowedOrigins = ['http://127.0.0.1:3001','http://localhost:3000', '0.0.0.0:3000'];

app.use(cors({
    origin: allowedOrigins,
}));

app.use('/api', generateFileRoutes)

//exportar modulos
module.exports = app