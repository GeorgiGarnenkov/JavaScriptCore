const handlers = {}

$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/login', handlers.getLogin);
    this.get('#/register', handlers.getRegister);

    this.post('#/login', handlers.loginUser);
    this.post('#/register', handlers.registerUser);

    this.get('#/logout', handlers.logoutUser);

    // ADD YOUR ROUTES HERE

    this.get('#/allSongs', handlers.getAllSongs);
    this.get('#/mySongs', handlers.getMySongs);
    this.get('#/createSong', handlers.getCreateSong);
    this.get("#/remove/:id", handlers.removeSong);
    this.get("#/like/:id", handlers.likeSong);

    this.post('#/createSong', handlers.createSong);



  });
  app.run('#/home');
});