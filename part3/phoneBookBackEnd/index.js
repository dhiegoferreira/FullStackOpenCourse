
const express = require('express')

const app = express()


app.use(express.json()) //json-parser

// const http = require('http')

let persons = 
    [
        { 
          "id": "1",
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": "2",
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": "3",
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": "4",
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
    ]


app.get("/info", (request, response) => {

    const amount = persons.length

    const dateNow = new Date(Date.now())

    response.end(`Phonebook has info for ${amount} people\n\n${dateNow.toString()}`)
})

app.get("/api/persons", (request,response) => {
    response.json(persons)
})


app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id

    const result = persons.find(person => person.id == id)

    return response.json(result)
})


const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})





// const app = http.createServer((request,response) => {
//     response.writeHead(200,{'Contet-Type':'application/json'})
//     // response.end('Hello World')
//     response.end(JSON.stringify(notes))
// })