const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;

describe('FilmStudio TESTS', () => {
    let filmStudio;
    beforeEach(() => {
        filmStudio = new FilmStudio('Pesho');
    });
    describe('Instantiation tests', () => {
        it('one parameter string', () => {

            let parameter = 'pesho';

            let filmStudio = new FilmStudio(parameter);

            let name = filmStudio.name;

            assert.equal(name, parameter);
        });
        it('property films empty array', () => {
            assert.isArray(filmStudio.films);
            assert.isEmpty(filmStudio.films);
        });
    });
    describe('makeMovie() receives two parameters: a string(filmName) and an array(roles)', () => {
        it('test return object', () => {
            let name = 'The Avengers';
            let roles = ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'];

            let result = filmStudio.makeMovie(name, roles).toString();
            let expected = {
                filmName: 'The Avengers',
                filmRoles: [{
                        role: 'Iron-Man',
                        actor: false
                    },
                    {
                        role: 'Thor',
                        actor: false
                    },
                    {
                        role: 'Hulk',
                        actor: false
                    },
                    {
                        role: 'Arrow guy',
                        actor: false
                    }
                ]
            }
            assert.equal(expected, result);
        });
        it('invalid arguments count throw error', () => {
            let name = 'The Avengers';
            let roles = ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'];
            let asd = 'something';

            let expect = 'Invalid arguments count';

            assert.throws(() => filmStudio.makeMovie(name, roles, asd), expect);


        });
        it('invalid argument throw error', () => {
            let name = 1;
            let roles = ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'];

            let expect = 'Invalid arguments';

            assert.throws(() => filmStudio.makeMovie(name, roles), expect);
        });
    });

    describe('casting() - receives two parameters: a string (actor) and another string (role)', () => {
        it('correct', () => {
            let expect = 'You got the job! Mr. pesho you are next Thor in the The Avengers. Congratz!';

            let name = 'pesho';
            let role = 'Thor';

            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            let result = filmStudio.casting(name, role);

            assert.equal(result, expect);
        });
        it('fail', () => {
            let expect = 'pesho, we cannot find a ivan role...';

            let name = 'pesho';
            let role = 'ivan';

            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            let result = filmStudio.casting(name, role);

            assert.equal(result, expect);
        });
        it('There are no films', () => {
            let name = 'pesho';
            let role = 'Thor';

            let result = filmStudio.casting(name, role);

            assert.equal(result, 'There are no films yet in Pesho.');
        });

    });

    describe('lookForProducer() - receives one parameter - filmName', () => {
        it('correct', () => {
            let expect = 'Film name: The Avengers\n' + 'Cast:\n' +
                'false as Iron-Man\n' +
                'pesho as Thor\n' +
                'false as Hulk\n' +
                'false as Arrow guy\n';
            let filmName = 'The Avengers';
            let name = 'pesho';
            let role = 'Thor';

            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            filmStudio.casting(name, role);

            let result = filmStudio.lookForProducer(filmName);

            assert.equal(result, expect);

        });
        it('fail', () => {
            let expect = 'Pesho do not exist yet, but we need the money...';

            let filmName = 'Pesho';
            let name = 'pesho';
            let role = 'Thor';

            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            filmStudio.casting(name, role);

            assert.throws(() => filmStudio.lookForProducer(filmName), expect);
        });
    });

});