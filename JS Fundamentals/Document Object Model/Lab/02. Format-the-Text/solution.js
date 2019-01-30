function solve(){
  let content = document
                        .getElementById('input')
                        .textContent
                        .split('.')
                        .filter(function(e){ return e === 0 || e });

  let choosenDiv = document.getElementById('output');
  let newArr = [];
  for (let i = 0; i < content.length; i++) {
    
    let sentence = content[i];
    
    newArr.push(sentence);

    if (content.length <= 3) {

      let newP = document.createElement("p");
      let text = document.createTextNode(newArr.join('. ')+ '.');
         newP.appendChild(text);
         choosenDiv.insertBefore(newP, choosenDiv.firstChild);
         newArr = [];
    }

    if (content.length > 3) {
      if (i % 3 === 0) {
        let newP = document.createElement("p");
        let text = document.createTextNode(newArr.join('. ') + '.');
         newP.appendChild(text);
         choosenDiv.insertBefore(newP, choosenDiv.firstChild);
         newArr = [];
      }
      else if (i === content.length - 1 && newArr.length < 3){
        let newP = document.createElement("p");
        let text = document.createTextNode(newArr.join('. ')+ '.');
         newP.appendChild(text);
         choosenDiv.insertBefore(newP, choosenDiv.firstChild);
         newArr = [];
      }
    }
  }
}