const songService = (() => {

    function create(data) {
        return kinvey.post('appdata', 'songs', 'kinvey', data);
    }

    function getAllSongs() {
        return kinvey.get('appdata', 'songs', 'kinvey', '?query={}&sort={"likeCounter": -1}');
    }

    function getMySongs() {

        return kinvey.get('appdata', 'songs', 'kinvey', `?query={"_acl.creator":"${sessionStorage.getItem('id')}"}&sort={"likeCounter": -1, "listenCounter": -1}`);
    }

    function removeSong(id) {
        return kinvey.remove('appdata', `songs/${id}`, 'kinvey');
    }

    function likeSong(id, song) {
        return kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }

    function getASong(id) {
        return kinvey.get('appdata', `songs/${id}`, 'kinvey');
    }

    return {
        create,
        getAllSongs,
        getMySongs,
        removeSong,
        likeSong,
        getASong
    }
})();