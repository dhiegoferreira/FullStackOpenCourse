const logger = require('../utils/logger')


const dummy = () => {
    return 1
}


const totalLikes = (blogs) => {

    var totalLikes = blogs.reduce(function(sum, blogs) {
            return sum + blogs.likes
    },0)

    return totalLikes

}

const favoriteBlog = (blogs) => {
    
    const maxLikedBlog = blogs.reduce((max, blog) => (
        blog.likes > max.likes ? blog : max
    ),blogs[0])

    return maxLikedBlog

}

const mostBlogs = (blogs) => {

    //get list of authors
    const authors = blogs.map((blog) => {
        return blog.author
    }) 

    //distinct authors
    const distictAuthors = [...(new Set(authors))]



    const topAuthors = []
    distictAuthors.forEach((author) => {
        var blogsByAuthor = blogs.filter((blog) => {
            return blog.author === author
        })

        topAuthors.push({
            author: author,
            blogs: blogsByAuthor.length
        })
    })

    if(topAuthors.length === 0)
        return 

    const mostBlogs = topAuthors.reduce((max, tops) => (
        tops.blogs > max.blogs ? tops : max
    ), [topAuthors[0]])

    return mostBlogs[0]

    //1 - count the amount of blogs of each author or blog object in blogs and put on this structure
    /*
    {
        author: "Robert C. Martin"
        blogs: 3
    }

    */
    // {
    //     _id :'6a422aa71b54a676234d17f8',
    //     title: 'Second TITLE',
    //     author: 'Edsgar W. Dijkstra',
    //     url:'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
    //     likes: 10,
    //     __v: 0
    // }
    // ,
    


}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}