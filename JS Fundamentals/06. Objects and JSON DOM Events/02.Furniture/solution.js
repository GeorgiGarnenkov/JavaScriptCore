

// '[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.5},{"name": "Wardrobe", "img": "https://www.ikea.com/PIAimages/0452603_PE601522_S3.JPG", "price": 235, "decFactor": 0.8}]'
function solve() {
  let buttons = document.getElementsByTagName('button');

  buttons[0].addEventListener('click', () =>{

    let furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    for (let furniture of furnitureList) {
        let div = document.createElement('div');
        div.setAttribute('class', 'furniture');
        let name = document.createElement('p');
        name.textContent = `Name: ${furniture.name}`;
        let img = document.createElement('img');
        img.setAttribute('src', `${furniture.img}`);
        let price = document.createElement('p');
        price.textContent = `Price: ${furniture.price}`;
        let decFactor = document.createElement('p');
        decFactor.textContent = `Decoration factor: ${furniture.decFactor}`;
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        
        div.appendChild(name);
        div.appendChild(img);
        div.appendChild(price);
        div.appendChild(decFactor);
        div.appendChild(checkbox);

        document.getElementById('furniture-list').appendChild(div);
    }
  });

  buttons[1].addEventListener('click', () => {
    let resultArr = [];
    let totalPrice = 0;
    let avgDecFactor = [];

    let array = Array.from(document.getElementById('furniture-list').children);
    
    for (let furniture of array){
      let text = document.getElementsByTagName('textarea')[0];

      let isChecked = furniture.getElementsByTagName('input')[0].checked;
      if (isChecked) {
        let name = furniture.getElementsByTagName('p')[0].textContent.split(': ')[1];
        resultArr.push(name)
        let price = +furniture.getElementsByTagName('p')[1].textContent.split(': ')[1];
        totalPrice += price;
        let decFactor = +furniture.getElementsByTagName('p')[2].textContent.split(': ')[1];
        avgDecFactor.push(decFactor);
      }
    }
    
    let textarea = document.getElementsByTagName('textarea')[1];

    let arrLength = avgDecFactor.length;
    textarea.value = `Bought furniture: ${resultArr.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor.reduce((a,b) => a + b) / arrLength}`;
  });
}
