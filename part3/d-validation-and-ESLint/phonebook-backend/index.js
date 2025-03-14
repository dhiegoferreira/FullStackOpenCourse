require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())


// Morgan set up
// Define a custom token for the request body
var morgan = require('morgan')

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body')
)




const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


app.get('/info', (request, response,next) => {


  const dateNow = new Date(Date.now())

  Person.find({}).then(persons =>
    response.end(`Phonebook has info for ${persons.length} people\n\n${dateNow.toString()}`)
  )
    .catch(error => next(error))


  // console.log(amount)


})



app.get('/api/persons', (request, response, next) => {

  Person.find({}).then(persons => {
    response.json(persons)
  })
    .catch(error => next(error))

})


app.get('/api/persons/:id', (request, response,next) => {
  const id = request.params.id


  Person.findById(id).then(persons => {
    response.json(persons.id === id).status(200).end()
  })
    .catch(error => next(error))


})


app.delete('/api/persons/:id', (request, response, next) => {

  Person.findByIdAndDelete(request.params.id)
    .then(
      response.status(204).end()
    ).catch(error => next(error))

})


app.put('/api/persons/:id', (request, response) => {

  const body = request.body


  const person = {
    name: body.name,
    number: body.number,
  }

  const opts = { runValidators: true }


  //querying the selected person
  const query = Person.find({ id: request.params.id })

  if(!query){
    response.status(400).json('Person not found!').end()
  }




  Person.findOneAndUpdate(query,person, opts)
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error =>   {
      response.status(400).json(error).end()
    } )


})


app.post('/api/persons', (request, response) => {

  const body = request.body

  Person.find({ name: body.name }).then(
    response.status(400).end()
  ).catch(error => {
    response.status(400).json(error).end()
  })


  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson).status(201).end()
  }).catch(error => {
    response.status(400).json(error).end()
  })


})




// handler of requests with unknown endpoint
app.use(unknownEndpoint)


// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



