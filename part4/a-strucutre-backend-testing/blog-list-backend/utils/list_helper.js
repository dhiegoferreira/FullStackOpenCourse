const dummy = (blogs) => {
    // ...

    return 1
}



const totalLikes = (blogs) => {

    var totalLikes = blogs.reduce(function(sum, blogs) {
            return sum + blogs.likes
    },0)

    return totalLikes

}


module.exports = {
    dummy,
    totalLikes
}