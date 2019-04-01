function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_B1-dTwAd4';
    const endpoint = 'players';
    const username = 'Georgi';
    const password = '123456';

    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    };

    let allPlayers;
    let selectedPlayer;
    let playerId;

    loadGame();

    $('#addPlayer').on('click', addPlayer);
    $('#reload').on('click', reloadBullets);
    $('#save').on('click', savePlayer);

    function loadGame(id) {
        $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/' + endpoint,
            method: 'GET',
            headers
        }).then((data) => {
            $('#players').empty();

            allPlayers = data;

            for (let player of data) {

                let div = $(`<div class="player" data-id="${player._id}">
                <div class="row">
                    <label>Name:</label>
                    <label class="name">${player.name}</label>
                </div>
                <div class="row">
                    <label>Money:</label>
                    <label class="money">${player.money}</label>
                </div>
                <div class="row">
                    <label>Bullets:</label>
                    <label class="bullets">${player.bullets}</label>
                </div>
                </div>`);

                let playBtn = $('<button class="play">Play</button>');
                playBtn.on('click', playPlayer);
                let deleteBtn = $('<button class="delete">Delete</button>');
                deleteBtn.on('click', deletePlayer);

                div.append(playBtn);
                div.append(deleteBtn);
                $('#players').append(div);
            }

            $('#save').css('display', 'block');
            $('#reload').css('display', 'block');
            $('#canvas').css('display', 'block');

            if (id) {
                selectedPlayer = allPlayers.filter(p => p._id == id)[0];
            } else {
                selectedPlayer = allPlayers[0];
            }
            playerId = selectedPlayer._id;
            loadCanvas(selectedPlayer);

        }).catch(err => {
            console.log(err);
        });
    }

    function playPlayer() {
        let id = $(this).parent().data('id');
        clearInterval(canvas.intevalId);
        loadGame(id);
    }

    function reloadBullets() {
        if (selectedPlayer.money >= 60 && selectedPlayer.bullets <= 0) {
            selectedPlayer.money -= 60;
            selectedPlayer.bullets += 6;
        }
    }

    async function savePlayer() {

        let playerObj = {
            name: selectedPlayer.name,
            money: selectedPlayer.money,
            bullets: selectedPlayer.bullets
        }
        await $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/' + endpoint + '/' + playerId,
            method: 'PUT',
            headers,
            data: JSON.stringify(playerObj),
        });
    }

    async function deletePlayer() {

        let id = $(this).parent().data('id');
        try {
            await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/' + endpoint + '/' + id,
                method: 'DELETE',
                headers
            });

            loadGame();

        } catch (error) {
            console.log(error);
        }
    }

    async function addPlayer() {

        try {
            let name = $('#addName').val();
            let money = 500;
            let bullets = 6;

            let playerObj = {
                name,
                money,
                bullets
            };

            await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/' + endpoint,
                method: 'POST',
                headers,
                data: JSON.stringify(playerObj)
            });

            $('#addName').val('');
            loadGame();
        } catch (error) {
            console.log(error);
        }
    }

}