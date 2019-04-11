function showInfo(id) {
    $(`#${id}`).toggle();
}

$(async () => { 
    
    try {
        const monkeysHTML = await $.get('./monkeys.hbs');
        const monkeyInfoHTML = await $.get('./monkeyInfo.hbs');

        Handlebars.registerPartial('monkeyInfo', monkeyInfoHTML);
        
        const template = Handlebars.compile(monkeysHTML);
        const context = {
            monkeys,
        }
        const renderedHTML = template(context);

        $('.monkeys').append(renderedHTML);

    } catch (error) {
        console.log(error);
    }
});