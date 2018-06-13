const express = require('express')
const readYaml = require('read-yaml')


const app = express()
const cemeteryData = readYaml.sync('data/cemeteries.yaml')

app.set('json spaces', 4)

// Routes
app.get('/', (req, res) => res.send('Ok'))
app.get('/cemeteries', (req, res) => res.json(cemeteryData))
app.get('/cemeteries/:country', (req, res) => res.json(cemeteryData[req.params.country]))
app.get('/cemeteries/:country/:city', (req, res) => res.json(
  cemeteryData[req.params.country][req.params.city]
))
app.get('/cemeteries/:country/:city/:cemetery', (req, res) => res.json(
  cemeteryData[req.params.country][req.params.city][req.params.cemetery]
))
app.get('/cemeteries/:country/:city/:cemetery/:block', (req, res) => res.json(
  cemeteryData[req.params.country][req.params.city][req.params.cemetery][req.params.block]
))

app.listen(3000, () => console.log('Example app listening on port 3000!')) // eslint-disable-line no-console

