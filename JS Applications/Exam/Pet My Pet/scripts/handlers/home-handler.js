handlers.getHome = function (ctx) {
  ctx.isAuth = userService.isAuth();
  ctx.username = sessionStorage.getItem('username');

  ctx.loadPartials({

      header: './views/header.hbs',
      footer: './views/footer.hbs'

    })
    .then(function () {
      this.partial('./views/home.hbs');
    });
}