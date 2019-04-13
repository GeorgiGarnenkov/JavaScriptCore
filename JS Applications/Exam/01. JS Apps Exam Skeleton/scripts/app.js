const handlers = {}

$(() => {
  const app = Sammy('#root', function () {
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
  });
  app.run();
});