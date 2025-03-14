const { test, after, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')


const Note = require('../models/note')

// const initialNotes = [
//     {
//         content: 'HTML is easy',
//         important: false,
//     },
//     {
//         content: 'Browser can execute only JavaScript',
//         important: true,
//     },
// ]

beforeEach(async () => {
    await Note.deleteMany({})

    // let noteObject = new Note(initialNotes[0])
    let noteObject = new Note(helper.initialNotes[0])
    await noteObject.save()

    // noteObject = new Note(initialNotes[1])
    noteObject = new Note(helper.initialNotes[1])
    await noteObject.save()
})

test('notes are returned as json', async () => {
    await api
        .get('/api/notes')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test.only('there are two notes', async () => {
    const response = await api.get('/api/notes')

    assert.strictEqual(response.body.length, 2)
})

test.only('the first note is about HTTP methods', async () => {
    const response = await api.get('/api/notes')

    const contents = response.body.map(e => e.content)
    assert(contents.includes('HTML is easy'))
})

//let's start with the operation for adding a new note.
//Let's write a test taht adds anew note and verifies that the number of notes returned
//by the API increases and the newly added note is in the list
test('a valid note can be added', async () => {
    const newNote = {
        content: 'async/await simplifies making async calls',
        important: true
    }

    await api
        .post('/api/notes')
        .send(newNote)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    // const response = await api.get('/api/notes')
    // const contents = response.body.map(r => r.content)

    const notesAtEnd = await helper.notesInDb()

    // assert.strictEqual(response.body.length, helper.initialNotes.length + 1)
    assert.strictEqual(notesAtEnd.length, helper.initialNotes.length + 1)


    const contents = notesAtEnd.map(n => n.content)

    assert(contents.includes('async/await simplifies making async calls'))
})


test('note without content is not added', async () => {

    const newNote = {
        important: true
    }

    await api
        .post('/api/notes')
        .send(newNote)
        .expect(400)

    
    const notesAtEnd = await helper.notesInDb()

    assert.strictEqual(notesAtEnd.length, helper.initialNotes.length)
    

})


after(async () => {
    await mongoose.connection.close()
})