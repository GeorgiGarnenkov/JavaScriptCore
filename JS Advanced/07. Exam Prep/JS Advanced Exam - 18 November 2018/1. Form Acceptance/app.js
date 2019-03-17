function acceptance() {
	let $company = $('input[name="shippingCompany"]');
	let $product = $('input[name="productName"]');
	let $quantity = $('input[name="productQuantity"]');
	let $scrape = $('input[name="productScrape"]');


	if ($company.val() !== '' && $product.val() !== '' &&
		!isNaN(Number($quantity.val())) && !isNaN(Number($scrape.val()))) {


		let checkQuantity = +$quantity.val() - +$scrape.val();

		if (checkQuantity > 0) {
			let warehouse = $('#warehouse');
			let div = $('<div>');
			let p = $('<p>');
			let button = $('<button>');
			button.text('outOfStockButton');
			button.on('click', () => div.remove());

			p.text(`[${$company.val()}] ${$product.val()} - ${checkQuantity} pieces`);

			div.append(p);
			div.append(button);
			warehouse.append(div);

			$company.val('');
			$product.val('');
			$quantity.val('');
			$scrape.val('');
		}
	}
}