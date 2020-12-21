const axios = require("axios")
const data = {
    Search: [
        {
            Title: "Avatar",
            Year: "2009",
            imdbID: "tt0499549",
            Type: "movie",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        },
        {
            Title: "Avatar: The Last Airbender",
            Year: "2005–2008",
            imdbID: "tt0417299",
            Type: "series",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
        },
        {
            Title: "Avatar: The Last Airbender - The Legend of Aang",
            Year: "2006",
            imdbID: "tt0959552",
            Type: "game",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BNjUwNzA5Nzc4N15BMl5BanBnXkFtZTgwNjM1ODY4MDE@._V1_SX300.jpg",
        },
        {
            Title: "The King's Avatar",
            Year: "2017–",
            imdbID: "tt6859260",
            Type: "series",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BZjIyMjE5ZDYtMTQxNC00NTEzLTgwYzYtMmM0NDg3OWFlYWM5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg",
        },
        {
            Title: "Avatar: The Game",
            Year: "2009",
            imdbID: "tt1517155",
            Type: "game",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BMTYxODI2OTI4MF5BMl5BanBnXkFtZTcwNjI1NzMwMw@@._V1_SX300.jpg",
        },
        {
            Title: "The King's Avatar",
            Year: "2019",
            imdbID: "tt10732794",
            Type: "series",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BOGMxZDc1N2ItODI3NS00MDIwLWJkYzAtMTgyMDZlN2FlNGYzXkEyXkFqcGdeQXVyMjQ0OTYxOTc@._V1_SX300.jpg",
        },
        {
            Title: "Avatar: The Last Airbender - Into the Inferno",
            Year: "2008",
            imdbID: "tt1459460",
            Type: "game",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BOWFjYWUwZTMtNjM2Mi00YjU3LWI2NjQtZTNhOTRhM2Q3YmJkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
        },
        {
            Title: "Avatar: Creating the World of Pandora",
            Year: "2010",
            imdbID: "tt1599280",
            Type: "movie",
            Poster: "N/A",
        },
        {
            Title: "The Guild: Do You Wanna Date My Avatar",
            Year: "2009",
            imdbID: "tt3051150",
            Type: "movie",
            Poster: "N/A",
        },
        {
            Title: "The King's Avatar: For the Glory",
            Year: "2019",
            imdbID: "tt10736726",
            Type: "movie",
            Poster:
                "https://m.media-amazon.com/images/M/MV5BYWFlMmNhZGEtYmQwYS00MGEwLWFkYzItYmZlNjI4ZDY3YmZkXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_SX300.jpg",
        },
    ],
    totalResults: "65",
    Response: "True",
};


function getMoviesFromServer() {
    return new Promise((resolve, reject) => {
        axios.get("http://www.omdbapi.com/?s=batman&plot=full&apikey=4f7462e2").then((result) => {
            const { data } = result;
            const { Search } = data;
            resolve(Search)
        })
        // if (!searchValue) reject("Missing search value ")
        // setTimeout(() => {
        //     const result = data.Search.filter(movie => movie.Title.toLowerCase().includes(searchValue))
        //     if (result.length) resolve(result)
        //     reject("No Data available")
        // }, 3000);
    })
}

console.log("script start...")

async function getMovies() {
    const result = await getMoviesFromServer("avatar")
    console.log(`movies length: ${result.length}`)
    const result2 = await getMoviesFromServer("avatar")
    console.log(`movies length: ${result2.length}`)
    const result3 = await getMoviesFromServer("avatar")
    console.log(`movies length: ${result3.length}`)
    const result4 = await getMoviesFromServer("avatar")
    console.log(`movies length: ${result4.length}`)
    const result5 = await getMoviesFromServer("avatar")
    console.log(`movies length: ${result5.length}`)
}

getMovies();
getMovies();


console.log("script end...")


