function loadRepos() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("res").textContent = this.responseText;
        }
    }
    let url = "https://api.github.com/users/testnakov/repos";

    req.open("GET", url, true);
    req.send();
}