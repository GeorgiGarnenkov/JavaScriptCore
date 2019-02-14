 function register() {
   let userName = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;

   let choosenSection = document.getElementById('result');
   let reg = /(.+)@(.+).(com|bg)/gm;
   let newH = document.createElement('h1');

   if (userName.length > 0 && reg.test(email) && password.length > 0) {

     let passwordLength = password.length;
     let successful = document.createTextNode('Successful Registration!');
     let userNameText = document.createTextNode(`Username: ${userName}`);
     let emailText = document.createTextNode(`Email: ${email}`);
     let passwordText = document.createTextNode(`Password: ${'*'.repeat(passwordLength)}`);

     newH.appendChild(successful);
     choosenSection.insertBefore(newH, choosenSection.firstChild);
     choosenSection.appendChild(userNameText);
     choosenSection.appendChild(document.createElement('br'));
     choosenSection.appendChild(emailText);
     choosenSection.appendChild(document.createElement('br'));
     choosenSection.appendChild(passwordText);
   }

   setTimeout(clear, 5000);

   function clear() {
    document.getElementById('result').innerHTML = '';
  }
 }