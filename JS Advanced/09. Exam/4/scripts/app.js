function solve() {

    let createOfferForm = $('#create-offers');
    createOfferForm.css('display', 'none');

    $('#create-offer-Btn').on('click', createOffer);

    $('#loginBtn').on('click', login);

    function login(e) {
        e.preventDefault();

        let usernameInputField = $('#username');
        let username = usernameInputField.val();
        if (username.length >= 4 && username.length <= 10) {

            let createOfferForm = $('#create-offers');
            createOfferForm.css('display', 'block');

            usernameInputField.val(`Hello, ${username}!`);
            usernameInputField.addClass('border-0 bg-light');

            $('#username').attr('disabled', 'disabled');

            $('#loginBtn').text('Logout').on('click', logout);

        } else {
            $('#notification').text('The username length should be between 4 and 10 characters.');
        }           
        
    }

    function logout(e) {
        e.preventDefault();

        $('#username').removeAttr('disabled');
        $('#username').val('');
        $('#username').removeClass('border-0 bg-light');

        $('#create-offers').css('display', 'none');
        $('#notification').text('');
        $('#loginBtn').text('Login');
    }

    function createOffer(e) {
        e.preventDefault();

        let offerNameInput = $('#offerName');
        let companyNameInput = $('#company');
        let descriptionInput = $('#description');
        if (offerNameInput.val() !== '' && companyNameInput.val() !== '' && descriptionInput.val() !== '') {
            
            let div = $('#offers-container');

            div.append(`<div class="col-3">
                <div class="card text-white bg-dark mb-3 pb-3" style="max-width: 18rem;">
                    <div class="card-header">${offerNameInput.val()}</div>
                    <div class="card-body">
                        <h5 class="card-title">${companyNameInput.val()}</h5>
                        <p class="card-text">${descriptionInput.val()}</p>
                    </div>
                </div>
            </div>`)


        }

        offerNameInput.val('');
        companyNameInput.val('');
        descriptionInput.val('');
    }
}

solve();