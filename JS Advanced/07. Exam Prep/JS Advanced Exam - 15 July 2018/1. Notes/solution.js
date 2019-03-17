function addSticker() {
    let titleElement = $('.title');
    let contentElement = $('.content');

    if (titleElement.val() !== '' && contentElement.val() !== '') {
        let stickerList = $('#sticker-list');

        let li = $('<li>');
        li.addClass('note-content');

        let a = $('<a>');
        a.addClass('button');
        a.text('x');
        a.on('click', () => li.remove());

        let h2 = $('<h2>');
        h2.text(titleElement.val());

        let hr = $('<hr>');

        let p = $('<p>');
        p.text(contentElement.val());

        li.append(a);
        li.append(h2);
        li.append(hr);
        li.append(p);

        stickerList.append(li);

        titleElement.val('');
        contentElement.val('');
    }
}