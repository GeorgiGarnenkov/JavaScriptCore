function getInfo() {
    $('#buses').empty();
    const baseUrl = 'https://judgetests.firebaseio.com/businfo/';
    let $busId = $('#stopId').val();

    $.ajax({
        url: baseUrl + $busId + '.json',
        method: 'GET',
        success: logData,
        error: handleError
    });


    function logData(data) {
        $('#stopName').text(data.name);

        for (let [key, value] of Object.entries(data.buses)) {

            let li = $('<li>').text(`Bus ${key} arrives in ${value} minutes`);
            $('#buses').append(li);
        }
    }

    function handleError() {
        $('#stopName').text('Error');
    }
}