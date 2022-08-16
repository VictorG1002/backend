const express = require('express')

const app = express()

app.use(express.json())

const users = []

app.get('/projects', (request, response) => {
  return response.json(users)
})

app.post('/projects', (request, response) => {
  return response.json(['Projeto 1', 'Projeto 2', 'Projeto 3'])
})

app.put('/projects/:id', (request, response) => {
  params = request.params
  return response.json(['Projeto 3', 'Projeto 2'])
})

app.delete('/projects/:id', (request, response) => {
  return response.json(['Projeto 2'])
})

app.listen(3333, () => {
  console.log('Backend started 🥶')
})
