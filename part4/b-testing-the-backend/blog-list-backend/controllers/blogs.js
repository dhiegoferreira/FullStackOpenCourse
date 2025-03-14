const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response,next) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(error => {
      next(error)
   })
})

blogsRouter.post('/', (request, response,next) => {
  
  blogRequest = request.body
  
  console.log(blogRequest.title)

  const blog = new Blog({
    title : blogRequest.title,
    author : blogRequest.author,
    url : blogRequest.url,
    likes : blogRequest.likes
  })


  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => {
      next(error)
   })
})


module.exports = blogsRouter