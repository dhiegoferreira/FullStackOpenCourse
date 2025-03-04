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

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body')
)





app.get("/info", (request, response,next) => {


    const dateNow = new Date(Date.now())
    
    Person.find({}).then(persons => 
        response.end(`Phonebook has info for ${persons.length} people\n\n${dateNow.toString()}`)
    )
        .catch(error => next(error))


    // console.log(amount)

    
})



app.get("/api/persons", (request, response, next) => {

    Person.find({}).then(persons => {
        response.json(persons)
    })
        .catch(error => next(error))

})


app.get("/api/persons/:id", (request, response,next) => {
    const id = request.params.id


    Person.findById(id).then(persons => {
        response.json(persons.id == id).status(200).end()
    })
        .catch(error => next(error))


})


app.delete("/api/persons/:id", (request, response, next) => {

    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        }).catch(error => next(error))

})


app.put("/api/persons/:id", (request, response) => {

    body = request.body


    const person = {
        name: body.name,
        number: body.number,
    }


    Person.findByIdAndUpdate(request.params.id, person, {
        new: true
    })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))

})


app.post("/api/persons", (request, response) => {

    const body = request.body;


    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        }).end();
    }


    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        }).end();
    }

    Person.find({ name: body.name }).then(result => {
        response.status(400).end()

    }).catch(error => next(error))


    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson).end()
    }).catch(error => next(error))


})



const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



