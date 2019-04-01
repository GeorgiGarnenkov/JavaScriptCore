function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com/locations.json';
    const weatherIcons = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    $('#submit').on('click', getWeather);

    function getWeather() {
        $('#current').empty();
        $('#upcoming').empty();

        $.ajax({
            url: baseUrl,
            method: 'GET',
            success: getLocationNameAndCode,
            error: displayError
        });
    }

    function getLocationNameAndCode(data) {
        let location = $('#location').val();
        for (let key in data) {

            let currentLocation = data[key].name;
            if (currentLocation === location) {
                let code = data[key].code;

                $.ajax({
                    url: `https://judgetests.firebaseio.com/forecast/today/${code}.json`,
                    method: 'GET',
                    success: displayWeatherInfo,
                    error: displayError
                });

                $.ajax({
                    url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json `,
                    method: 'GET',
                    success: displayWeather3dayInfo,
                    error: displayError
                });
            }
        }

        $('#location').val('');
    }

    function displayWeatherInfo(data) {
        $('#forecast').css('display', 'block');
        let currentCondition = $('#current');
        let name = data['name'];
        let condition = data['forecast'].condition;
        let high = data['forecast'].high;
        let low = data['forecast'].low;

        let firstDiv = $('<div class="label">Current conditions</div>');
        let spanIcon = $(`<span class="condition symbol">${weatherIcons[condition]}</span>`);

        let spanCondition = $('<span class="condition"></span>');

        let spanData1 = $('<span class="forecast-data"></span>').text(name);
        let spanData2 = $('<span class="forecast-data"></span>').text(low + weatherIcons['Degrees'] + '/' + high + weatherIcons['Degrees']);
        let spanData3 = $('<span class="forecast-data"></span>').text(condition);

        spanCondition
            .append(spanData1)
            .append(spanData2)
            .append(spanData3);

        currentCondition
            .append(firstDiv)
            .append(spanIcon)
            .append(spanCondition);

    }

    function displayWeather3dayInfo(data) {
        console.log(data);
        let upcomingCondition = $('#upcoming');

        let firstDiv = $('<div class="label">Three-day forecast</div>');
        upcomingCondition.append(firstDiv);

        let forecasts = data['forecast'];

        for (let key in forecasts) {
            let condition = forecasts[key].condition;
            let high = forecasts[key].high;
            let low = forecasts[key].low;


            let spanCondition = $('<span class="upcoming"></span>');

            let spanData1 = $('<span class="symbol"></span>').text(weatherIcons[condition]);
            let spanData2 = $('<span class="forecast-data"></span>').text(low + weatherIcons['Degrees'] + '/' + high + weatherIcons['Degrees']);
            let spanData3 = $('<span class="forecast-data"></span>').text(condition);

            spanCondition
                .append(spanData1)
                .append(spanData2)
                .append(spanData3);

            upcomingCondition
                .append(spanCondition);
        }
    }

    function displayError(err) {
        $('#forecast').css('display', 'block');
        let currentCondition = $('#current .label');

        currentCondition.text(err);
    }
}