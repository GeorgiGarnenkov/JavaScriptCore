function solve() {

    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', (event) => {
        event.preventDefault();

        let username = document.getElementsByClassName('user-info')[0].children[1].value;
        let email = document.getElementsByClassName('user-info')[0].children[5].value;

        let topicsArr = [];
        let topics = document.getElementsByClassName('topics')[0].getElementsByTagName('input');
        for (let topic of topics) {
            if (topic.checked) {
                topicsArr.push(topic.value);
            }
        }

        let tr = document.createElement('tr');
        let tdUsername = document.createElement('td');
        tdUsername.textContent = username;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        let tdTopics = document.createElement('td');
        tdTopics.textContent = topicsArr.join(' ');

        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        document.getElementsByTagName('tbody')[0].appendChild(tr);
    });

    buttons[1].addEventListener('click', (event) => {
        event.preventDefault();

        let searchStr = document.getElementsByTagName('input')[7].value;

        let tds = Array.from(document.querySelectorAll('table tbody tr td'));

        tds.forEach(element => {
            element.parentNode.style.visibility = 'hidden';
        });
        
        tds.forEach(element => {
            if (element.textContent.includes(searchStr)) {
                element.parentNode.style.visibility = 'visible';
            }
            
        });                
    });
}