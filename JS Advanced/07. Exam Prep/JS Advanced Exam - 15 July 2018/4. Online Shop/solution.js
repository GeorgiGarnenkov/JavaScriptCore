function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    // Write your code here
    let $buttonElement = $('#submit');
    let $product = $('.custom-select');
    let $price = $('#price');
    let $quantity = $('#quantity');
    let $inventoryUl = $('.display');
    let $capacity = $('#capacity');
    let $sum = $('#sum');


    $product.on('input', () => {
        let isEmpty = $product.val() === '';

        $buttonElement.attr('disabled', isEmpty);
    });
    $buttonElement.on('click', function () {
        let currentCapacity = Number($capacity.val());
        let currentQuantity = Number($quantity.val());
        let totalCapacity = currentCapacity + currentQuantity;
        let currentSum = Number($sum.val());
        let currentPrice = Number($price.val());

        if (totalCapacity < 150) {
            $capacity.val(totalCapacity);
        } else {
            $capacity.val('full');
            $capacity.removeClass('field').addClass('fullCapacity');
            $product.attr('disabled', true);
            $price.attr('disabled', true);
            $quantity.attr('disabled', true);
            $buttonElement.attr('disabled', true);
        }

        $sum.val(currentSum + currentPrice);

        addToInventory();

        reset();
    });

    function addToInventory() {

        let li = $('<li>');
        li.text(`Product: ${$product.val()} Price: ${$price.val()} Quantity: ${$quantity.val()}`);

        $inventoryUl.append(li);
    }

    function reset() {
        $product.val('');
        $price.val(1);
        $quantity.val(1);
        $buttonElement.attr('disabled', true);
    }
}