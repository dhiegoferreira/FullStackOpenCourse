require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Note = require('./models/note')


app.use(cors())
app.use(express.json()) //json-parser
app.use(express.static('dist'))




//Logger for requests
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)







app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes =>
    response.json(notes).end()
  ).catch(error => {
    console.log(error)
    response.status(500).end()
  })
})


app.get('/api/notes/:id', (request, response, next) => {

  Note.findById(request.params.id).then(note => {
    if (note) {
      response.json(note).end()
    } else {
      response.status(404).end()
    }

  })
    .catch(error => {
      next(error)
      // console.log(error)
      // response.status(400).send({error: 'malformatted id'})
    })
})


app.delete('/api/notes/:id', (request, response) => {


  Note.findByIdAndDelete(request.params.id)
    .then( response.status(204).end())
    .catch(error => {response.status(400).json(error).end()})


})




app.post('/api/notes', (request, response) => {

  const body = request.body


  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: Boolean(body.important) || false,
  })



  note.save().then(savedNote => {
    response.json(savedNote)
  })
    .catch(error => {response.status(400).json(error).end()})



})


app.put('/api/notes/:id', (request, response) => {


  const { content, important } = request.body

  console.log(content)

  Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => {response.status(400).json(error).end()})

})



//Error Handling
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

//handler of requests with unknown endpoint
app.use(unknownEndpoint)



const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



// const app = http.createServer((request,response) => {
//     response.writeHead(200,{'Contet-Type':'application/json'})
//     // response.end('Hello World')
//     response.end(JSON.stringify(notes))
// })