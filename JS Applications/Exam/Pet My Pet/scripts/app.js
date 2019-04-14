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

    // dashboard
    this.get('#/dashboard', handlers.getAllPets);

    // add pet
    this.get('#/add', handlers.getAddPet);
    this.post('#/add', handlers.postAddPet);

    // my pets
    this.get('#/myPets', handlers.getMyPets);

    // categories
    this.get('#/all', handlers.getAll);
    this.get('#/cats', handlers.getCats);
    this.get('#/dogs', handlers.getDogs);
    this.get('#/parrots', handlers.getParrots);
    this.get('#/reptiles', handlers.getReptiles);
    this.get('#/other', handlers.getOther);

    // edit
    this.get('#/details/:id', handlers.getDetailsPet);
    this.post('#/details/:id', handlers.postDetailsPet);

    // pet
    this.get('#/pet/:id', handlers.petPet);

    // delete
    this.get('#/remove/:id', handlers.removePet);

  });
  app.run('#/home');
});