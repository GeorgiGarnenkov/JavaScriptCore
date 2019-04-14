// GET all PETS
handlers.getAllPets = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        pet: './views/pet.hbs',

    }).then(function () {

        petService.getAllPets()
            .then((pets) => {

                let otherPets = pets
                    .filter(pet => pet._acl.creator !== sessionStorage.getItem('id'))
                    .sort((a, b) => b.likes - a.likes);

                ctx.pets = otherPets;

                this.partial('./views/dashboard.hbs');

            });
    });
}

// GET add PET
handlers.getAddPet = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs'

    }).then(function () {

        this.partial('./views/add.hbs');

    });
}

// POST add PET
handlers.postAddPet = function (ctx) {

    let name = ctx.params.name;
    let description = ctx.params.description;
    let imageURL = ctx.params.imageURL;
    let category = ctx.params.category;

    if (name === undefined || description === undefined || imageURL === undefined) {
        notification.showError('Invalid pet details!');
        ctx.redirect('#/add');
        return;
    }

    petService.addPet(name, description, imageURL, category)
        .then((res) => {

            notifications.showInfo('Pet created.');
            ctx.redirect('#/dashboard');

        });
}

// GET my PETS
handlers.getMyPets = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        myPet: './views/myPet.hbs'

    }).then(function () {

        petService.getAllPets()
            .then((pets) => {

                let myPets = pets
                    .filter(pet => pet._acl.creator === sessionStorage.getItem('id'));

                ctx.pets = myPets;

                this.partial('./views/myPets.hbs');
            });
    });
}

// GET all btn
handlers.getAll = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        pet: './views/pet.hbs'

    }).then(function () {

        petService.getAllPets()
            .then((pets) => {

                let otherPets = pets
                    .filter(pet => pet._acl.creator !== sessionStorage.getItem('id'));

                ctx.pets = otherPets;

                this.partial('./views/dashboard.hbs');
            });
    });
}

// GET cats btn
handlers.getCats = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        pet: './views/pet.hbs'

    }).then(function () {

        petService.getAllPets()
            .then((pets) => {

                let otherPets = pets
                    .filter(pet => pet.category === 'Cat' && pet._acl.creator !== sessionStorage.getItem('id'))
                    .sort((a, b) => b.likes - a.likes);

                ctx.pets = otherPets;

                this.partial('./views/dashboard.hbs');
            });
    });
}

// GET dogs btn
handlers.getDogs = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        pet: './views/pet.hbs'

    }).then(function () {
        petService.getAllPets()
            .then((pets) => {

                let otherPets = pets
                    .filter(pet => pet.category === 'Dog' && pet._acl.creator !== sessionStorage.getItem('id'))
                    .sort((a, b) => b.likes - a.likes);

                ctx.pets = otherPets;

                this.partial('./views/dashboard.hbs');
            });
    });
}

// GET parrots btn
handlers.getParrots = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        pet: './views/pet.hbs'

    }).then(function () {

        petService.getAllPets()
            .then((pets) => {

                let otherPets = pets
                    .filter(pet => pet.category === 'Parrot' && pet._acl.creator !== sessionStorage.getItem('id'))
                    .sort((a, b) => b.likes - a.likes);

                ctx.pets = otherPets;

                this.partial('./views/dashboard.hbs');
            });
    });
}

// GET reptiles btn
handlers.getReptiles = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        pet: './views/pet.hbs'

    }).then(function () {

        petService.getAllPets()
            .then((pets) => {

                let otherPets = pets
                    .filter(pet => pet.category === 'Reptile' && pet._acl.creator !== sessionStorage.getItem('id'))
                    .sort((a, b) => b.likes - a.likes);

                ctx.pets = otherPets;

                this.partial('./views/dashboard.hbs');
            });
    });
}

// GET others btn
handlers.getOther = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs',
        pet: './views/pet.hbs'

    }).then(function () {

        petService.getAllPets()
            .then((pets) => {

                let otherPets = pets
                    .filter(pet => pet.category === 'Other' && pet._acl.creator !== sessionStorage.getItem('id'))
                    .sort((a, b) => b.likes - a.likes);

                ctx.pets = otherPets;

                this.partial('./views/dashboard.hbs');
            });
    });
}

// GET details PET
handlers.getDetailsPet = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs'

    }).then(function () {

        let id = ctx.params.id;

        petService.getPet(id)
            .then((pet) => {

                let isCreator = (sessionStorage.getItem('id') === pet._acl.creator);

                this.partial('./views/details.hbs', {
                    user: isCreator,
                    pet: pet
                });
            });
    });
}

// POST edit details PET
handlers.postDetailsPet = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs'

    }).then(function () {

        petService.getPet(ctx.params.id)
            .then((pet) => {

                pet.description = ctx.params.description;

                petService.editPet(ctx.params.id, pet)
                    .then((res) => {

                        notifications.showInfo('Updated successfully!');
                        ctx.redirect('#/dashboard');

                    });
            });
    });
}

// PET 
handlers.petPet = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    petService.getPet(ctx.params.id)
        .then((pet) => {

            if (pet._acl.creator !== sessionStorage.getItem('id')) {

                pet.likes++;

                petService.like(ctx.params.id, pet)
                    .then((res) => {
                        
                        ctx.redirect('#/dashboard');

                    });
            }
        });
}

// REMOVE PET
handlers.removePet = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({

        header: './views/header.hbs',
        footer: './views/footer.hbs'

    }).then(function () {

        petService.remove(ctx.params.id)
            .then((res) => {

                notifications.showInfo('Pet removed successfully!');
                ctx.redirect('#/dashboard');
                
            });
    });
}