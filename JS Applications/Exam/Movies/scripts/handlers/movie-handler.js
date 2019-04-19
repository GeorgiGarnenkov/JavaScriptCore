// GET all PETS
handlers.getAllMovies = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        movie: './views/movie.hbs',

    }).then(function () {

        movieService.getAllMovies()
            .then((movies) => {

                let moviesOther = movies
                    .sort((a, b) => b.tickets - a.tickets);

                ctx.movies = moviesOther;

                this.partial('./views/cinema.hbs');

            });
    });
}

// GET add movie
handlers.getAddMovie = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs'

    }).then(function () {

        this.partial('./views/add.hbs');

    });
}

// POST add movie
handlers.postAddMovie = function (ctx) {

    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageUrl = ctx.params.imageUrl;
    let genres = ctx.params.genres;
    let tickets = Number(ctx.params.tickets);

    if (title.length < 6 || description < 10 || !imageUrl.startsWith('https://') || typeof tickets !== 'number') {
        notifications.showError('Invalid movie inputs!');
        ctx.redirect('#/add.hbs');
        return;
    }

    movieService.addMovie(title, imageUrl, description, genres, tickets)
        .then((res) => {

            notifications.showInfo('Movie created successfully.');
            ctx.redirect('#/cinema.hbs');

        });
}

// GET my movies
handlers.getMyMovies = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        movie: './views/myMovie.hbs'

    }).then(function () {

        movieService.getAllMovies()
            .then((movies) => {

                let myMovies = movies
                    .filter(movie => movie._acl.creator === sessionStorage.getItem('id'));

                ctx.movies = myMovies;

                this.partial('./views/myMovies.hbs');
            });
    });
}

// GET details MOVIE
handlers.getDetailsMovies = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',


    }).then(function () {

        movieService.getMovie(id)
            .then((movie) => {
                console.log(movie);
                debugger;
                this.partial('./views/details.hbs', {
                    movie: movie
                });
            });
    });
}

// GET edit MOVIE
handlers.getEditMovies = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',


    }).then(function () {

        movieService.getMovie(id)
            .then((movie) => {

                this.partial('./views/edit.hbs', {
                    movie: movie
                });
            });
    });
}

// POST edit MOVIE
handlers.postEditMovie = async function (ctx) {

    let id = ctx.params.id;

    try {
        let movie = await movieService.getAMovie(id);

        movieService.editMovie(id, movie)
            .then(function () {

                notifications.showInfo('Updated!');
                ctx.redirect('#/myMovies');

            });

    } catch (error) {
        console.log(error);
    }
}

// buy TICKETS
handlers.buyMovie = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    movieService.getMovie(id)
        .then((movie) => {
            let title = movie.title;

            if (movie.tickets < 1) {

                notifications.showError(`No more tickets for ${title}!`)
                ctx.redirect('#/cinema');
                return;

            }

            movie.tickets--;

            movieService.buy(id, movie)
                .then((res) => {

                    notifications.showInfo(`Successfully bought ticket for ${title}!`)
                    ctx.redirect('#/cinema');
                });
        });
}

// REMOVE movie
handlers.removeMovie = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');


    movieService.remove(ctx.params.id)
        .then((res) => {

            notifications.showInfo('Movie removed successfully!');
            ctx.redirect('#/myMovies');

        });

}