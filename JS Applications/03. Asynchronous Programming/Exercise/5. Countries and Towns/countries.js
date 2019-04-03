function attachEvents() {
    const appKey = 'kid_SyhuTHlYV';
    const countryUrl = `https://baas.kinvey.com/appdata/${appKey}/countries`;
    const townUrl = `https://baas.kinvey.com/appdata/${appKey}/towns`;

    const username = 'Georgi';
    const password = '123456';
    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    };

    $('#showBtn').on('click', showCountries);
    $('#createCountryBtn').on('click', createCountry);
    $('#createTownBtn').on('click', createTown);

    async function showCountries() {
        try {
            let countries = await $.ajax({
                method: 'GET',
                url: countryUrl,
                headers,
            });

            appendCountries(countries);

        } catch (error) {
            console.log(error);
        }
    }

    async function createCountry() {

        try {

            let countryName = $('#countryName').val();
            let obj = {
                name: countryName,
            };

            await $.ajax({
                url: countryUrl,
                method: 'POST',
                headers,
                data: JSON.stringify(obj),
            });

            $('#countryName').val('');

            $('#allCountries').empty();

            showCountries();

        } catch (error) {
            console.log(error);
        }
    }

    async function createTown() {
        let countries = await $.ajax({
            method: 'GET',
            url: countryUrl,
            headers,
        });        

        let country = countries.filter(c => c.name === $('#townCountryName').val())[0];
        
        if (country) {
            await $.ajax({
                method: 'POST',
                url: townUrl,
                headers,
                data: JSON.stringify({
                    name: $('#townName').val(),
                    country: country._id
                })
            });

            $('#townSuccess').append('<h3>Town was created successfully!</h3>');
        } else {
            $('#townSuccess').append('<h3>Country does not exist!</h3>');
        }

        setTimeout(function () {
            $('#townSuccess').empty();
        }, 5000);

        $('#townCountryName').val('');
        $('#townName').val('')
    }

    async function appendCountries(countries) {

        let $allCountries = $('#allCountries');

        for (let country of countries) {
            
            let $div = $('<div>').attr('country-id', country._id);
            $div.append(`<label>Country</label>`);
            $div.append(`<input type="text" id="countryUpdateName" value="${country.name}"/>`);

            let $updateBtn = $('<button>').attr('id', 'updateCountryBtn').text('Update Country');
            $updateBtn.on('click', () => {
                updateCountry(country._id);
            });

            $div.append($updateBtn);

            let $deleteBtn = $('<button>').attr('id', 'deleteCountryBtn').text('Delete Country');
            $deleteBtn.on('click', () => {
                deleteCountry(country._id);
            });

            $div.append($deleteBtn);

            try {
                let townsInDb = await $.ajax({
                    url: townUrl,
                    method: 'GET',
                    headers,
                });

                let towns = townsInDb.filter(t => t.country === country._id);
                for (let town of towns) {

                    let $divTown = $('<div>')
                    $divTown.append(`<label>Town</label>`);
                    $divTown.append(`<input type="text" id="townName" value="${town.name}" disabled/>`);

                    $div.append($divTown);

                }
            } catch (error) {
                console.log(error);
            }

            $allCountries.append($div);
            
        }
    }

    async function updateCountry(countryId) {
        await $.ajax({
            url: `${countryUrl}/${countryId}`,
            method: 'PUT',
            headers,
            data: JSON.stringify({
                name: $('#countryUpdateName').val()
            })
        });

        $('#allCountries').empty();

        showCountries();
    }

    async function deleteCountry(countryId) {
        await $.ajax({
            method: 'DELETE',
            url: `${countryUrl}/${countryId}`,
            headers,
        });

        $('#allCountries').empty();
        showCountries();
    }
}