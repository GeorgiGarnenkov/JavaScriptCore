const SoftUniFy = require('./app');
const assert = require('chai').assert;

describe('SoftUniFy tests', () => {
    let softunify;
    beforeEach(() => {
        softunify = new SoftUniFy();
    });

    it('Should contain allSongs property that is initialized as an empty object', () => {
        assert.isObject(softunify.allSongs);
        assert.isEmpty(softunify.allSongs);
    });

    describe('downloadSong(artist, song, lyrics) tests', () => {
        it('should return correct object', () => {
            let artist = 'artist';
            let song = 'song';
            let lyrics = 'lyrics';

            let expectedResult = {
                'allSongs': {
                    artist: {
                        rate: 0,
                        votes: 0,
                        songs: [`${song} - ${lyrics}`]
                    }
                }
            };

            assert.deepEqual(softunify.downloadSong(artist, song, lyrics), expectedResult);
        });
    });

    describe('playSong(song) tests', () => {
        it('should return incorrect result', () => {
            softunify.downloadSong('artist', 'song', 'lyrics');

            let result = softunify.playSong('test');
            let expectedResult = `You have not downloaded a test song yet. Use SoftUniFy's function downloadSong() to change that!`;

            assert.equal(result, expectedResult);
        });
    });

    describe('rateArtist() tests', () => {
        it('should rate artist', () => {
            softunify.downloadSong('artist', 'song', 'lyrics');

            let result = softunify.rateArtist('test');
            let expectedResult = `The test is not on your artist list.`;

            assert.equal(result, expectedResult);
        });
    });
});