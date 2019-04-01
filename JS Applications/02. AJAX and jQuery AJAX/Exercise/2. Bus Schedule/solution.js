function solve() {

    const baseUrl = 'https://judgetests.firebaseio.com/schedule/';
    let currentStopId = 'depot';
    let currentStop;

    function depart() {
        $.ajax({
            url: baseUrl + currentStopId + '.json',
            method: 'GET',
            success: loadStart,
            error: handleError
        });
    }

    function arrive() {
        $('#info > span').text(`Arriving at ${currentStop.name}`);

        $('#depart').attr('disabled', false);
        $('#arrive').attr('disabled', true);

        currentStopId = currentStop.next;
    }

    function loadStart(data) {
        currentStop = data;

        $('#info > span').text(`Next stop ${currentStop.name}`);

        $('#arrive').attr('disabled', false);
        $('#depart').attr('disabled', true);
    }

    function handleError(err) {
        $('#info > span').text('Error');
    }

    return {
        depart,
        arrive
    };
}
let result = solve();