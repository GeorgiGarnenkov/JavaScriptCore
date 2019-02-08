function solve() {
  let storage = {};
  let profit = 0;

  let buttons = document.getElementsByTagName('button');

  buttons[0].addEventListener('click', load);

  buttons[1].addEventListener('click', buy);

  buttons[2].addEventListener('click', endDay);

  function load() {

    let logResult = document.getElementsByTagName('textarea')[2];
    let products = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    for (let product of products) {

      if (!storage.hasOwnProperty(product.name)) {
        storage[product.name] = {

          quantity: product.quantity,
          price: product.price

        };
      } else {
        storage[product.name] = {

          quantity: storage[product.name].quantity + product.quantity,
          price: product.price

        };
      }

      logResult.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
    }
  }

  function buy() {

    let logResult = document.getElementsByTagName('textarea')[2];
    let order = JSON.parse(document.getElementsByTagName('textarea')[1].value);

    if (storage.hasOwnProperty(order.name) && storage[order.name].quantity >= order.quantity) {
      
      storage[order.name].quantity -= order.quantity;
      let money = storage[order.name].price * order.quantity;

      profit += money;

      logResult.value += `${order.quantity} ${order.name} sold for ${money}.\n`;
    }else {
      logResult.value += `Cannot complete order.\n`;
    }
  }

  function endDay() {
    let logResult = document.getElementsByTagName('textarea')[2];
    logResult.value += `Profit: ${profit.toFixed(2)}.\n`;

    buttons[0].removeEventListener('click', load);
    buttons[1].removeEventListener('click', buy);
    buttons[2].removeEventListener('click', endDay);
  }
}