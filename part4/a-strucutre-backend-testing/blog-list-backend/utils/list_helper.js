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


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}