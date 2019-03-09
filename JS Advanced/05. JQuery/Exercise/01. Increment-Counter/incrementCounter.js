function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    list.addClass('results');
    
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    $(incrementBtn).on('click', function () {
        textArea.val(+$('.counter').val() + 1);
    });

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    $(addBtn).on('click', function () {
        let li = $('<li>');
        li.text(textArea.val());
        li.appendTo(list);
    })

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);

}