const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('total likes', () => {


    const listWithOneBlog = [
    {
        _id :'5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsgar W. Dijkstra',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    }
    ]



    test('when list has only one blog, equals the like of that', () => {
        assert.strictEqual(listHelper.totalLikes(listWithOneBlog),5)
    })

})


describe('the most likes on blogs', () => {


    const blogs = [
    {
        _id :'5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsgar W. Dijkstra',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    },
    {
        _id :'6a422aa71b54a676234d17f8',
        title: 'Second TITLE',
        author: 'Edsgar W. Dijkstra',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 10,
        __v: 0
    }
    ,
    {
        _id :'7a422aa71b54a676234d17f8',
        title: 'Third Title',
        author: 'Edsgar W. Dijkstra',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 15,
        __v: 0
    }
    
    ]



    test('when list has only one blog, equals the like of that', () => {
        assert.deepStrictEqual({likes: listHelper.favoriteBlog(blogs).likes},{likes : 15})
    })

})