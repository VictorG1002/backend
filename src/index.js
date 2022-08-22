const express = require('express')
const { uuid } = require('uuidv4')

const app = express()

app.use(express.json())

const users = []

function logRequests(request, response, next) {
  const { method, url } = request
  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)
  return next()
}

app.use(logRequests)

app.get('/users', (request, response) => {
  const { name } = request.query

  const results = name ? users.filter(user => user.name.includes(name)) : users

  return response.json(results)
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
  const { id } = request.params
  const { name, age } = request.body

  const userIndex = users.findIndex(user => user.id == id)

  if (userIndex < 0) {
    return response.status(400).json({ error: 'User not found' })
  }

  const user = {
    id,
    name,
    age
  }

  users[userIndex] = user

  return response.json(user)
})

app.delete('/users/:id', (request, response) => {
  const { id } = request.params

  const userIndex = users.findIndex(user => user.id == id)

  if (userIndex < 0) {
    return response.status(400).json({ error: 'User not found' })
  }

  users.splice(userIndex, 1)

  return response.status(204).send()
})

app.listen(3333, () => {
  console.log('Backend started 🥶')
})
