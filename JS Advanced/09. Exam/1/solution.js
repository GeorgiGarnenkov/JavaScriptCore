function addProduct() {
    let $productInput = $('#add-product > label:nth-child(2) > input[type="text"]');
    let $priceInput = $('#add-product > label:nth-child(3) > input[type="number"]');



    if ($productInput.val() !== '' && $priceInput.val() !== '') {

        let $tBody = $('#product-list');
        let $tFootSum = $('#bill > tfoot > tr > td:nth-child(2)');

        let sum = Number($tFootSum.text()) + Number($priceInput.val());
        
        $tFootSum.text(sum)

        let tr = $('<tr>');
        let td1 = $('<td>');
        let td2 = $('<td>');

        td1.append($productInput.val());
        td2.append($priceInput.val());

        tr.append(td1);
        tr.append(td2);

        $tBody.append(tr);
    }

    $productInput.val('');
    $priceInput.val('');

}