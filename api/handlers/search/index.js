const { data } = require("../../data/")

function searchMovies(searchValue) {
    if (typeof searchValue !== 'string') return data;
    const result = data.filter
        (movie => movie.Title.toLowerCase().
            includes(searchValue))

    return result;
}

module.exports = { searchMovies }

