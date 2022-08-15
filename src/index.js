const express = require('express')

const app = express()

app.get('/projects', (request, response) => {
  return response.json(['Projeto 1', 'Projeto 2'])
})

app.post('/projects', (request, response) => {
  return response.json(['Projeto 1', 'Projeto 2'])
})

app.put('/project/:id', (request, response) => {
  return response.json(['Projeto 3', 'Projeto 2'])
})

app.delete('/project/:id', (request, response) => {
  return response.json(['Projeto 3', 'Projeto 2'])
})

app.listen(3333, () => {
  console.log('Backend started 🥶')
})
