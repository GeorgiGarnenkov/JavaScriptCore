function showDetails(id) {
    $(`#${id}`).toggle();
}

$(async () => {

    try {
        const contactsListHTML = await $.get('./contacts-list.hbs');
        const contactsInfoHTML = await $.get('./contacts-info.hbs');

        Handlebars.registerPartial('contactsInfo', contactsInfoHTML);
        const template = Handlebars.compile(contactsListHTML);
        const context = {
            contacts,
        }
        const renderedHTML = template(context);

        $('body').append(renderedHTML);

    } catch (error) {
        console.log(error);
    }
})