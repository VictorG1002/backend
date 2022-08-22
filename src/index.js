const express = require('express')
const { uuid } = require('uuidv4')

const app = express()

app.use(express.json())

const users = []

app.get('/users', (request, response) => {
  return response.json(users)
})

app.post('/users', (request, response) => {
  const { name, age } = request.body

  const user = {
    id: uuid(),
    name,
    age
  }

  users.push(user)

  return response.json(user)
})

app.put('/users/:id', (request, response) => {
  params = request.params
  return response.json(['Projeto 3', 'Projeto 2'])
})

app.delete('/users/:id', (request, response) => {
  return response.json(['Projeto 2'])
})

app.listen(3333, () => {
  console.log('Backend started 🥶')
})
