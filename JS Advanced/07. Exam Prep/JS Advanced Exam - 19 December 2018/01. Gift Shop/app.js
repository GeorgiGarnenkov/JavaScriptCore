function solution() {
	let christmasGiftShop = $('#christmasGiftShop');

	let typeElement = $('#toyType');
	let priceElement = $('#toyPrice');
	let descriptionElement = $('#toyDescription');
 
	if (typeElement.val() && +priceElement.val() && descriptionElement.val()) {

		let div = $('<div>');
		div.addClass('gift');

		let img = $('<img>');
		img.attr('src', 'gift.png');

		let h2 = $('<h2>');
		h2.text(typeElement.val());

		let p = $('<p>');
		p.text(`${descriptionElement.val()}`);

		let button = $('<button>');
		button.text(`Buy it for $${priceElement.val()}`);
		button.on('click', () => div.remove());

		div.append(img);
		div.append(h2);
		div.append(p);
		div.append(button);

		christmasGiftShop.append(div);
	}

	typeElement.val('');
	priceElement.val('');
	descriptionElement.val('');

}