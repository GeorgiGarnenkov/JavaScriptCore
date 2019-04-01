function attachEvents() {
    const baseUrl = 'https://phonebook-db4fc.firebaseio.com/phonebook';

    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);

    function loadContacts() {
        $.ajax({
            url: baseUrl + '.json',
            method: 'GET',
            success: displayContacts,
            error: handleError
        });
    }

    function createContact() {
        let newContactJSON = JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        });

        $.ajax({
            url: baseUrl + '.json',
            method: 'POST',
            data: newContactJSON,
            success: loadContacts,
            error: handleError
        });

        $('#person').val('');
        $('#phone').val('');
    }

    function displayContacts(data) {
        
        let phonebook = $('#phonebook');
        phonebook.empty();

        for (let key in data) {

            let person = data[key]['person'];
            let phone = data[key]['phone'];

            let li = $('<li>');
            li.text(`${person}: ${phone} `);

            phonebook.append(li);

            li.append($("<button>Delete</button>")
                .click(deleteContact.bind(this, key)));
        }
    }

    function deleteContact(key) {
        let request = {
            method: 'DELETE',
            url: baseUrl + '/' + key + '.json'
          };
          $.ajax(request)
            .then(loadContacts)
            .catch(handleError);
        
    }

    function handleError() {
        $("#phonebook").append($("<li>Error</li>"));
    }
}