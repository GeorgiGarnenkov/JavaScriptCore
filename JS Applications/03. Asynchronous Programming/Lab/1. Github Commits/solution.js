function loadCommits() {
    // AJAX call …
    $("#commits").empty();

    let username = $('#username').val();
    let repo = $('#repo').val();


    let request = {
        url: `https://api.github.com/repos/${username}/${repo}/commits`,
        method: 'GET'
    }

    $.ajax(request)
        .then(addCommits)
        .catch(handleError);

    function addCommits(data) {
        //"<commit.author.name>: <commit.message>"
        for (let key in data) {
            let ul = $('#commits');
            let li = $('<li>');

            let author = data[key]['commit']['author'].name;
            let message = data[key]['commit']['message'];

            li.text(`${author}: ${message}`);
            ul.append(li);
        }
    }

    function handleError(err) {
        //"Error: <error.status> (<error.statusText>)"
        let ul = $('#commits');
        let li = $('<li>');
        li.text(`Error: ${err.status} (${err.statusText})`);
        ul.append(li);
    }

}