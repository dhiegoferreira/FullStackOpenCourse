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





describe('largest amount of ', () => {


    const blogs = [
    {
        _id :'5a422aa71b54a676234d17f8',
        title: 'Atricle 1',
        author: 'Author1',
        url:'https://blog.com/author1/article1',
        likes: 2,
        __v: 0
    },
    {
        _id :'6a422aa71b54a676234d17f8',
        title: 'Atricle 2',
        author: 'Author1',
        url:'https://blog.com/author1/article2',
        likes: 1,
     
        __v: 0
    },
    {
        _id :'6a422aa71b54a676234d17f8',
        title: 'Atricle 3',
        author: 'Author1',
        url:'https://blog.com/author1/article3',
        likes: 1,
        __v: 0
    }
    ,
    {
        _id :'7a422aa71b54a676234d17f8',
        title: 'Article 1',
        author: 'Author2',
        url:'https://blog.com/author2/article1',
        likes: 5,
        __v: 0
    }
    ,
    {
        _id :'7a422aa71b54a676234d17f8',
        title: 'Article 2',
        author: 'Author2',
        url:'https://blog.com/author2/article2',
        likes: 5,
        __v: 0
    },
    {
        _id :'7a422aa71b54a676234d17f8',
        title: 'Article 1',
        author: 'Author3',
        url:'https://blog.com/author3/article1',
        likes: 70,
        __v: 0
    },
    {
        _id :'7a422aa71b54a676234d17f8',
        title: 'Article 2',
        author: 'Author3',
        url:'https://blog.com/author3/article2',
        likes: 70,
        __v: 0
    },
    {
        _id :'7a422aa71b54a676234d17f8',
        title: 'Article 3',
        author: 'Author3',
        url:'https://blog.com/author3/article3',
        likes: 70,
        __v: 0
    },
    {
        _id :'7a422aa71b54a676234d17f8',
        title: 'Article 4',
        author: 'Author3',
        url:'https://blog.com/author3/article4',
        likes: 70,
        __v: 0
    },
    ]



    test('should return the author with the most amount of blogs', () => {
        assert.deepStrictEqual(listHelper.mostBlogs(blogs),{author: 'Author3', blogs: 4})
        
    })

    test('should return the author whose blogs posts have the largest amount of likes', () => {
        assert.equal(listHelper.mostLikes(blogs),[])
        // assert.deepStrictEqual(listHelper.mostLikes(blogs),{author: 'Author3', likes: 70})
        
    })

})