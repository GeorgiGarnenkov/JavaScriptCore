function attachEvents() {
    const baseUrl = 'https://messenger-74426.firebaseio.com/messenger.json';
    let submitBtn = $('#submit');
    let refreshBtn = $('#refresh');

    submitBtn.on('click', submitMessage);
    refreshBtn.on('click', reloadPage);

    function submitMessage() {

        let authorInput = $('#author');
        let contentInput = $('#content');

        let author = authorInput.val();
        let content = contentInput.val();
        let timestamp = Date.now();

        let message = {
            author,
            content,
            timestamp
        }

        let jsonMessage = JSON.stringify(message);

        $.ajax({
            url: baseUrl,
            method: 'POST',
            data: jsonMessage
        });

        authorInput.val('');
        contentInput.val('');
    }

    function reloadPage() {
        $.ajax({
            url: baseUrl,
            method: 'GET',
            success: loadMessages
        });
    }

    function loadMessages(data) {
        let messagesArea = $('#messages');
        let valuesFromData = Object.values(data);
        let allMessages = '';

        for (let message of valuesFromData) {
            allMessages += `${message.author}: ${message.content}\n`;
        }

        messagesArea.text(allMessages);
    }
}