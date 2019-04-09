function showStatus(id) {
    $(`#${id}`).toggle();
}

$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        try {
            let catsTemplate = await $.ajax({
                url: './catsTemplate.html'
            });

            let compiledTemplate = Handlebars.compile(catsTemplate);

            let context = {
                cats: window.cats
            };

            let renderedHTML = compiledTemplate(context);

            $('#allCats').append(renderedHTML);

        } catch (error) {
            console.log(error);
        }
    }
})
