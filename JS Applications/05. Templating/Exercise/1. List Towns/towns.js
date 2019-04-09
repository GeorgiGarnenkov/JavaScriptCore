function attachEvents() {

    $('#btnLoadTowns').on('click', loadTowns);
    
    function loadTowns() {

        let towns = $('#towns').val().split(', ');

        let template = $('#towns-template').html();

        let compiledTemplate = Handlebars.compile(template);

        let context = {
            towns
        };

        let renderedHTML = compiledTemplate(context);

        $('#root').append(renderedHTML);
    }

}