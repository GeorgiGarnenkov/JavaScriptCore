function addItem() {
    
    let menuElement = $('#menu');
    let textElement = $('#newItemText');
    let valueElement = $('#newItemValue');

    let optionElement = $('<option>');
    optionElement.text(textElement.val());
    optionElement.val(valueElement.val());

    menuElement.append(optionElement);

    textElement.val('');
    valueElement.val('');
}
