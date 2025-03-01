require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const Note = require('./models/note')


const password = process.argv[2]



app.use(cors())
app.use(express.json()) //json-parser
app.use(express.static('dist'))





const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)



app.get('/api/notes', (request, response) => {

    Note.find({}).then(notes => {
        response.json(notes)
    })

})


app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)

    note ? response.json(note) : response.status(404).end()


})


app.delete('/api/notes/:id', (request, response) => {

    Note.findById(request.params.id).then(note => {
        response.json(note)
    })

})




app.post('/api/notes', (request, response) => {

    const body = request.body


    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    console.log(`content:${body.content}`)
    const note = new Note ({
        content: body.content,
        important: Boolean(body.important) || false,
    })



    note.save().then(savedNote => {
        response.json(savedNote)
    })


    
})


app.put('/api/notes/:id', (request, response) => {

    const id = request.params.id

    console.log(id)
    //save note
    noteToUpdate = notes.find(note => note.id === id)

    console.log(noteToUpdate.important)

    const newNote = {
        content: noteToUpdate.content,
        important: !(noteToUpdate.important),
        id: noteToUpdate.id
    }

    console.log(newNote.important)

    response.json(newNote)


})



const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



// const app = http.createServer((request,response) => {
//     response.writeHead(200,{'Contet-Type':'application/json'})
//     // response.end('Hello World')
//     response.end(JSON.stringify(notes))
// })