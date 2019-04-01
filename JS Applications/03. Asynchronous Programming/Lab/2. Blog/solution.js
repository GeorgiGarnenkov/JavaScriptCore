function attachEvents() {
    const kinveyAppId = "kid_S1htVfcmm";
    const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
    const kinveyUsername = "peter";
    const kinveyPassword = "p";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {
        "Authorization": "Basic " + base64auth
    };


    $('#btnLoadPosts').on('click', loadPostsClick);
    $('#btnViewPost').on('click', viewPostsClick);

    function loadPostsClick() {
        let loadPostsRequest = {
            url: serviceUrl + '/posts',
            headers: authHeaders
        }

        $.ajax(loadPostsRequest)
            .then(displayPosts)
            .catch(displayError);
    }

    function viewPostsClick() {
        let selectedPostId = $("#posts").val();

        if (!selectedPostId) {
            return;
        }

        let requestPosts = $.ajax({
            url: serviceUrl + "/posts/" + selectedPostId,
            headers: authHeaders
        });

        let requestComments = $.ajax({
            url: serviceUrl + `/comments/?query={"post_id":"${selectedPostId}"}`,
            headers: authHeaders
        });

        Promise.all([requestPosts, requestComments])
            .then(displayPostWithComments)
            .catch(displayError);

    }

    function displayPosts(posts) {
        $("#posts").empty();
        for (let post of posts) {

            let option = $("<option>")
                .text(post.title)
                .val(post._id);

            $("#posts").append(option);
        }
    }

    function displayPostWithComments([post, comments]) {
        $("#post-title").text(post.title);
        $("#post-body").text(post.body);
        $("#post-comments").empty();

        for (let comment of comments) {

            let commentItem = $("<li>").text(comment.text);

            $("#post-comments").append(commentItem);
        }
    }

    function displayError(err) {
        let errorDiv = $("<div>").text("Error: " +
            err.status + ' (' + err.statusText + ')');
        $(document.body).prepend(errorDiv);
        setTimeout(function () {
            $(errorDiv).fadeOut(function () {
                $(errorDiv).remove();
            });
        }, 3000);

    }
}