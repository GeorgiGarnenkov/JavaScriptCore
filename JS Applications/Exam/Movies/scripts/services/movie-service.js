const movieService = (() => {

    function getAllMovies() {
        return kinvey.get('appdata', 'movies', 'kinvey');
    }

    function addMovie(title, imageUrl, description, genres, tickets) {
        return kinvey.post('appdata', 'movies', 'kinvey', {
            title,
            imageUrl,
            description,
            genres,
            tickets
        });
    }

    function getMovie(id) {
        return kinvey.get('appdata', `movies/${id}`, 'kinvey');
    }

    function editMovie(id, movie) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', movie);
    }

    function remove(id) {
        return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
    }

    function buy(id, movie) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', movie);
    }

    return {
        getAllMovies,
        addMovie,
        getMovie,
        editMovie,
        remove,
        buy
    }
})();