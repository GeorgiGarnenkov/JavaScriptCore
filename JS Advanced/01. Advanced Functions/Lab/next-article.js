function getArticleGenerator(articles) {
    let i = 0;
    return function () {
        if (articles.length - 1 >= i) {
            let contentHolder = document.querySelector('#content');
            let article = document.createElement('article');

            article.textContent = articles[i];

            contentHolder.appendChild(article);
            i++;
        }     
    };
}