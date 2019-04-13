// GET - all Songs
handlers.getAllSongs = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
            song: './views/songs/song.hbs'

        })
        .then(function () {
            let that = this;

            songService.getAllSongs()
                .then(function (songs) {

                    let userId = sessionStorage.getItem('id');
                    songs.forEach((song) => song.isCreator = song._acl.creator === userId);

                    ctx.songs = songs;

                    that.partial('./views/songs/allSongsPage.hbs');

                });
        });
}

// GET - my Songs
handlers.getMySongs = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
            song: './views/songs/song.hbs'

        })
        .then(function () {
            let that = this;

            songService.getMySongs()
                .then(function (songs) {

                    let userId = sessionStorage.getItem('id');
                    songs.forEach((song) => song.isCreator = song._acl.creator === userId);

                    ctx.songs = songs;

                    that.partial('./views/songs/mySongsPage.hbs');

                });
        });
}

// GET - create Song
handlers.getCreateSong = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        })
        .then(function () {
            this.partial('./views/songs/createSongPage.hbs');
        });
}

// POST - create Song
handlers.createSong = function (ctx) {

    let data = {
        ...ctx.params,
        likeCounter: 0,
        listenCounter: 0,
    }

    let titleLengthCheck = data.title.length < 6;
    let artistLengthCheck = data.artist.length < 3;
    let imageURLStartsCheck = !data.imageURL.startsWith('http://');

    if (titleLengthCheck) {
        notifications.showError('The title should be at least 6 characters long');

    } else if (artistLengthCheck) {
        notifications.showError('The artist should be at least 3 characters long');

    } else if (imageURLStartsCheck) {
        notifications.showError('The image should start with \"http://\" or \"https://\"');
    } else {
        songService.create(data)
            .then((res) => {

                notifications.showInfo('Song created successfully.');
                ctx.redirect('#/mySongs');

            })
            .catch(function (err) {

                notifications.showError(err.responseJSON.description);

            });
    }
}

// GET - remove Song
handlers.removeSong = function (ctx) {

    songService.removeSong(ctx.params.id)
        .then(function () {

            notifications.showInfo('Song removed successfully!');
            ctx.redirect('#/allSongs');

        });
}

// Update Song
handlers.likeSong = async function (ctx) {

    let id = ctx.params.id;

    try {
        let song = await songService.getASong(id);

        let newLikes = Number(song.likeCounter) + 1;
        song.likeCounter = newLikes;

        songService.likeSong(id, song)
            .then(function () {
                notifications.showInfo('Liked!');
                ctx.redirect('#/allSongs');
            });

    } catch (error) {
        console.log(error);
    }
}