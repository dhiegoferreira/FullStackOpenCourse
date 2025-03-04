require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
var morgan = require('morgan')

const Person = require('./models/person')


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

/* 3
3.15 - deleting phonebook need works
3.16 - error handling to error handler middleware
3.17 - when create a new phonebook enty for peerson, update the phone nhumber for existing phonebook name
3.18 - api/persons/:id and info routes to use the database, and verify that they work directly with the browser, Postman, or VS Code REST client.
*/



// Define a custom token for the request body
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body')
)






app.get("/info", (request, response) => {

    const amount = persons.length

    const dateNow = new Date(Date.now())

    response.end(`Phonebook has info for ${amount} people\n\n${dateNow.toString()}`)
})



app.get("/api/persons", (request, response) => {

    Person.find({}).then(persons => {
        response.json(persons)
    })
        .catch(error => {
            console.log(error)
            response.status(400).end()
        })

})


app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id


    Person.findById(id).then(persons => {
        response.json(persons.id == id).status(200).end()
    })
        .catch(error => {
            console.log(error)
            response.status(400).end()
        })


})


app.delete("/api/persons/:id", (request, response) => {

    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
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

    }).catch(error => {
        response.status(400).end()
    });


    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson).end()
    })
    .catch(error => {
        console.log(error)
        response.status(400).end()
    })



})


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



