const notesRouter = require('express').Router()
const Note = require('../models/note')


notesRouter.get('/api/notes', (request, response) => {

    Note.find({}).then(notes =>
        response.json(notes).end()
    ).catch(error =>{
        console.log(error)
        response.status(500).end()
    })

})


notesRouter.get('/api/notes/:id', (request, response, next) => {

    Note.findById(request.params.id).then(note => {
        if(note){
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


notesRouter.delete('/api/notes/:id', (request, response) => {

    
    Note.findByIdAndDelete(request.params.id)
        .then(result =>{
            response.status(204).end()
        })
        .catch(error => next(error))


})




notesRouter.post('/api/notes', (request, response) => {

    const body = request.body


    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    
    const note = new Note ({
        content: body.content,
        important: Boolean(body.important) || false,
    })



    note.save().then(savedNote => {
        response.json(savedNote)
    })
    .catch(error => {
        console.log(error)
        response.status(400).end()
    })


    
})


notesRouter.put('/api/notes/:id', (request, response) => {

    const body = request.body

    const note = {
        content: body.content,
        important: body.important,
    }

    
    Note.findByIdAndUpdate(request.params.id, note,{
        new: true
    })
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error))
    

})



module.exports = notesRouter