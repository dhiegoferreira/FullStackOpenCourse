require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
var morgan = require('morgan')

const Person = require('./models/person')


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())





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

})


app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id


    Person.find({}).then(persons => {
        response.json(persons.id == id)
    })

    // return person ? response.json(result) : response.status(402).end()
})


app.delete("/api/persons/:id", (request, response) => {

    const id = request.params.id

    const personToRemove = persons.filter(person => person.id !== id)

    Person.find({}).then(
        response.json(persons.filter(person => person.id !== id))
    )



    // return personToRemove ? response.json(personToRemove) : response.status(402).end()
})





app.post("/api/persons", (request, response) => {

    const body = request.body;

    // console.log(body.name)
    // console.log(body.number)
    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        }).end();
    }

    // console.log("after first validation")
    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        }).end();
    }
    // console.log("after second validation")

    Person.find({ name: body.name }).then(result => {
        response.status(400).end()

    });


    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson).end()
    })


})

// function getRandom() {
//     return Math.random() * (0 - Number.MAX_SAFE_INTEGER) + Number.MAX_SAFE_INTEGER;
// }

// const generateId = () => {

//     const maxID = notes.length > 0 ? Math.max(...notes.map(n => Number(n.id))) : 0

//     return String(maxId + 1)
// }


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



