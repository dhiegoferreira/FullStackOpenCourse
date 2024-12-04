
const express = require('express')
const app = express()


app.use(express.json()) //json-parser

// const http = require('http')

let notes = [
    {
        id:"1",
        content: "HTML is easy",
        important: true
    },
    {
        id:"2",
        content: "Browser can execute only Js",
        important: true
    },
    {
        id:"3",
        content: "GET and POST are the most important methods of HTTP protocol.",
        important: true
    },
]

app.get('/',(request, response) => {
    response.send('<h1>Hello World!</h1>')
})


app.get('/api/notes',(request, response) => {
    response.json(notes)
})


app.get('/api/notes/:id',(request,response) =>{
    const id = request.params.id
    const note = notes.find(note => note.id ===id)

    note ? response.json(note) : response.status(404).end()

    
})



app.delete('/api/notes/:id',(request, response) => {

    const id = request.params.id

    notes = notes.filter(note => note.id !== id)
    

    response.status(204).end()
})


const generateId = () => {
    
    const maxID = notes.length > 0 ? Math.max(...notes.map(n => Number(n.id))) : 0

    return String(maxId + 1)
}


app.post('/api/notes',(request, response) =>{
    
    const body = request.body


    if(!body.content){
        return  response.status(400).json({
            error: 'content missing'
        })
    }


    const note = {
        content: body.content,
        important: Boolean(body.important) || false,
        id:generateId()
    }



    notes = notes.concat(note)
    
    
    response.json(note)
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