const { data } = require("../../data/")

function searchMovies(searchValue, movies) {
    const d = movies || data
    if (typeof searchValue !== 'string') return d;
    const result = d.filter
        (movie => movie.Title.toLowerCase().
            includes(searchValue))

    return result;
}

module.exports = { searchMovies }

