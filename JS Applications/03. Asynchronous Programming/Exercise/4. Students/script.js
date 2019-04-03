function attachEvents() {
    const appKey = 'kid_BJXTsSi-e';
    const endpoint = 'students';
    const url = `https://baas.kinvey.com/appdata/${appKey}/${endpoint}`;
    const username = 'guest';
    const password = 'guest';

    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    };
    createStudent();
    getStudents();


    async function createStudent() {
        try {
            await $.ajax({
                url: url,
                method: 'POST',
                headers,
                data: JSON.stringify({
                    ID: 1,
                    FirstName: 'gosho',
                    LastName: 'goshev',
                    FacultyNumber: '123456',
                    Grade: 5
                })
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function getStudents() {
        try {
            let students = await $.ajax({
                url: url,
                method: 'GET',
                headers
            });

            let sortedStudents = Array.from(students).sort((a, b) => a.ID - b.ID);
            let $results = $('#results');
            console.log(sortedStudents);
            
            sortedStudents.forEach(s => {
                let $tr = $('<tr>');
                $tr.append(`<td>${s.ID}</td>`);
                $tr.append(`<td>${s.FirstName}</td>`);
                $tr.append(`<td>${s.LastName}</td>`);
                $tr.append(`<td>${s.FacultyNumber}</td>`);
                $tr.append(`<td>${s.Grade}</td>`);
                $results.append($tr);
            });

        } catch (error) {
            console.log(error);
        }
    }
}