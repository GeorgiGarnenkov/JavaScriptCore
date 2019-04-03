function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_BJ_Ke8hZg';
    const username = 'guest';
    const password = 'pass';

    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    };

    $('#getVenues').on('click', getVenues);

    async function getVenues() {
        try {
            let $inputVenueDate = $('#venueDate').val();

            let ids = await $.ajax({
                url: baseUrl + 'rpc/' + appKey + '/' + 'custom/' + `calendar?query=${$inputVenueDate}`,
                method: 'POST',
                headers,
            }); // array from IDs

            for (let id of ids) {
                let venue = await $.ajax({
                    url: baseUrl + 'appdata/' + appKey + '/' + 'venues/' + `${id}`,
                    method: 'GET',
                    headers
                });

                appendVenue(venue);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function appendVenue(venue) {
        let $venue = $(
            `<div class="venue" id="${venue._id}">
            <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
            <div class="venue-details" style="display: none;">
                <table>
                    <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
                    <tr>
                    <td class="venue-price">${venue.price} lv</td>
                    <td><select class="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></td>
                    <td><input class="purchase" type="button" value="Purchase"></td>
                    </tr>
                </table>
                <span class="head">Venue description:</span>
                <p class="description">${venue.description}</p>
                <p class="description">Starting time: ${venue.startingHour}</p>
            </div>
        </div>
        `);

        $venue.find('.info').on('click', () => {

            let $venueDetails = $venue.find('.venue-details');
            $venueDetails.css('display', 'block');

        });

        $venue.find('.purchase').on('click', () => {
            getPurchase(venue._id, venue.name, venue.price, $venue.find('.quantity option:selected').val());
        });


        $('#venue-info').append($venue);
    }

    function getPurchase(venueId, name, price, quantity) {

        $('#venue-info').empty();

        let $purchase = $(
            `<span class="head">Confirm purchase</span>
        <div class="purchase-info">
          <span>${name}</span>
          <span>${quantity} x ${price}</span>
          <span>Total: ${quantity * price} lv</span>
          <input type="button" value="Confirm">
        </div>`);

        $purchase.find('input').on('click', () => {
            confirm(venueId, quantity);
        });

        $('#venue-info').append($purchase);
    }

    async function confirm(venueId, quantity) {
        try {
            $('#venue-info').empty();

            let data = await $.ajax({
                method: 'POST',
                url: `${baseUrl}rpc/${appKey}/custom/purchase?venue=${venueId}&qty=${quantity}`,
                headers
            });

            $('#venue-info').text('You may print this page as your ticket');

            $('#venue-info').append(data.html);

        } catch (error) {
            console.log(error);
        }
    }
}