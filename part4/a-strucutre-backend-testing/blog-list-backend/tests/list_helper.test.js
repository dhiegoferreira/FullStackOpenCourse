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
        title: '1º Title',
        author: 'Author1',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    },
    {
        _id :'6a422aa71b54a676234d17f8',
        title: '2º Title',
        author: 'Author1',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 10,
        __v: 0
    }
    ,
    {
        _id :'7a422aa71b54a676234d17f8',
        title: '3º Title',
        author: 'Author2',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 15,
        __v: 0
    }
    ,
    {
        _id :'7a422aa71b54a676234d17f8',
        title: '4º Title',
        author: 'Author2',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 15,
        __v: 0
    },
    {
        _id :'7a422aa71b54a676234d17f8',
        title: '5º Title',
        author: 'Author3',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 15,
        __v: 0
    }
    ]



    test('when list has only one blog, equals the like of that', () => {
        assert.deepStrictEqual({likes: listHelper.favoriteBlog(blogs).likes},{likes : 15})
        
    })

})





describe('largest amount of blogs', () => {


    const blogs = [
    {
        _id :'5a422aa71b54a676234d17f8',
        title: '1º Title',
        author: 'Author1',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    },
    {
        _id :'6a422aa71b54a676234d17f8',
        title: '2º Title',
        author: 'Author1',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 10,
     
        __v: 0
    },
    {
        _id :'6a422aa71b54a676234d17f8',
        title: '2º Title',
        author: 'Author1',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 10,
        __v: 0
    }
    ,
    {
        _id :'7a422aa71b54a676234d17f8',
        title: '3º Title',
        author: 'Author2',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 15,
        __v: 0
    }
    ,
    {
        _id :'7a422aa71b54a676234d17f8',
        title: '4º Title',
        author: 'Author2',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 15,
        __v: 0
    },
    {
        _id :'7a422aa71b54a676234d17f8',
        title: '5º Title',
        author: 'Author3',
        url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 15,
        __v: 0
    }
    ]



    test('should return the author with the most amount of blogs', () => {
        assert.deepStrictEqual(listHelper.mostBlogs(blogs),{author: 'Author1', blogs: 3})
        
    })

})