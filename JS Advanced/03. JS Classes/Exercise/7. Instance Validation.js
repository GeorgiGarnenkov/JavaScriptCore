class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        let pattern = /^\d{6}$/g;
        if (!pattern.test(clientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        return clientId;
    }

    set email(email) {
        let pattern = /[A-Za-z0-9]+@[A-Za-z\.]+/g;
        if (!pattern.test(email)) {
            throw new TypeError('Invalid e-mail');
        }

        return email;
    }

    set firstName(firstName) {
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        let pattern = /^[A-Za-z]+$/g;
        if (!pattern.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        return firstName;
    }

    set lastName(lastName) {
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        let pattern = /^[A-Za-z]+$/g;
        if (!pattern.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        return lastName;
    }
}