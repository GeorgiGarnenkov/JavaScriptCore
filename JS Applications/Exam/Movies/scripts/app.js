const handlers = {};

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

    // cinema
    this.get('#/cinema', handlers.getAllMovies);

    // add movie
    this.get('#/add', handlers.getAddMovie);
    this.post('#/add', handlers.postAddMovie);

    // my movies
    this.get('#/myMovies', handlers.getMyMovies);

    // details
    this.get('#/details/:id', handlers.getDetailsMovie);

    this.get('#/edit/:id', handlers.getEditMovie);
    this.post('#/edit/:id', handlers.postEditMovie);

    // buy tickets
    this.get('#/buy/:id', handlers.buyMovie);

    // delete
    this.get('#/remove/:id', handlers.removeMovie);

  });
  app.run('#/home');
});