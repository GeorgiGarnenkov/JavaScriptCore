// login -> GET
handlers.getLogin = function (ctx) {
  ctx.loadPartials({

      header: './views/header.hbs',
      footer: './views/footer.hbs'

    })
    .then(function () {
      this.partial('./views/login.hbs');
    });
}

// register -> GET
handlers.getRegister = function (ctx) {
  ctx.loadPartials({

      header: './views/header.hbs',
      footer: './views/footer.hbs'

    })
    .then(function () {
      this.partial('./views/register.hbs');
    });
}

// login -> POST
handlers.loginUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;

  userService.login(username, password)
    .then((res) => {

      userService.saveSession(res);
      notifications.showInfo('Login successful.');
      ctx.redirect('#/home');

    })
    .catch(function (err) {

      notifications.showError(err.responseJSON.description);

    });
}

// register -> POST
handlers.registerUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  let repeatPassword = ctx.params.repeatPassword;

  if (repeatPassword !== password) {

    notifications.showError('Passwords must match');
    return;

  }

  if (username.length < 3) {
    notifications.showError('The username should be at least 3 characters long');
  } else if (password.length < 6) {
    notifications.showError('The password should be at least 6 characters long');
  } else {
    userService.register(username, password).then((res) => {
        userService.saveSession(res);
        notifications.showInfo('User registration successful.');
        ctx.redirect('#/home');
      })
      .catch(function (err) {

        notifications.showError(err.responseJSON.description);

      });
  }
}

// logout -> GET
handlers.logoutUser = function (ctx) {
  userService.logout().then(() => {

    sessionStorage.clear();
    notifications.showInfo('Logout successful.');
    ctx.redirect('#/home');

  });
}