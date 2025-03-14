const logger = require('../utils/logger')


const dummy = () => {
    return 1
}


const totalLikes = (blogs) => {

    var totalLikes = blogs.reduce(function (sum, blogs) {
        return sum + blogs.likes
    }, 0)

    return totalLikes

}

const favoriteBlog = (blogs) => {

    const maxLikedBlog = blogs.reduce((max, blog) => (
        blog.likes > max.likes ? blog : max
    ), blogs[0])

    return maxLikedBlog

}

const mostBlogs = (blogs) => {

    if (blogs.length === 0) return null;

    const authorBlogCounts = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + 1;
        return acc;
    }, {});

   

    const mostBlogsAuthor = Object.keys(authorBlogCounts).reduce((max, author) => {
        return authorBlogCounts[author] > authorBlogCounts[max] ? author : max;
    });

    return {
        author: mostBlogsAuthor,
        blogs: authorBlogCounts[mostBlogsAuthor]
    };


}

const mostLikes = (blogs) => {

    //TODO: 
    /*
    The function returns the author, whose blog posts have the largest amount of likes. 
    The return value also contains the total number of likes that the author has received:
    */

    
    return 0  
    
    // if (blogs.length === 0) return null;

    // const likesByAuthorBlogCounts = blogs.reduce((acc, blog) => {
    //     acc[blog.author] = (acc[blog.author] || 0) + 1;
    //     return acc;
    // }, {});
    // const mostBlogsAuthor = Object.keys(likesByAuthorBlogCounts).reduce((max, author) => {
    //     return likesByAuthorBlogCounts[author] > likesByAuthorBlogCounts[max] ? author : max;
    // });

    // return {
    //     author: mostBlogsAuthor,
    //     likes: likesByAuthorBlogCounts[mostBlogsAuthor]
    // };


}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
}