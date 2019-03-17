function realEstateAgency() {
	let $message = $('#message');
	let $building = $('#building');
	let $profit = $('#roof h1');


	let $rentPrice = $('input[name="apartmentRent"]');
	let $apartmentType = $('input[name="apartmentType"]');
	let $commissionRate = $('input[name="agencyCommission"]');
	let $regOfferBtn = $('button[name="regOffer"]');


	let $familyBudget = $('input[name="familyBudget"]');
	let $familyApartmentType = $('input[name="familyApartmentType"]');
	let $familyName = $('input[name="familyName"]');
	let $findOfferBtn = $('button[name="findOffer"]');

	$regOfferBtn.on('click', () => {
		if (!regOfferFieldsAreGood()) {
			$message.text('Your offer registration went wrong, try again.');
		} else {
			// post the new offer on the agency and print...
			//'Your offer was created successfully.'
			let div = $('<div>');
			div.addClass('apartment');

			let p1 = $('<p>');
			p1.text(`Rent: ${$rentPrice.val()}`)
			let p2 = $('<p>');
			p2.text(`Type: ${$apartmentType.val()}`);
			let p3 = $('<p>');
			p3.text(`Commission: ${$commissionRate.val()}`);

			div.append(p1);
			div.append(p2);
			div.append(p3);

			$building.append(div);

			$message.text('Your offer was created successfully.');
		}

		$rentPrice.val('');
		$apartmentType.val('');
		$commissionRate.val('');
	});

	$findOfferBtn.on('click', () => {
		if (!findOfferFieldsAreGood()) {
			$message.text('We were unable to find you a home, so sorry :(');
		} else {
			


		}

		$familyBudget.val('');
		$familyApartmentType.val('');
		$familyName.val('');
	});

	function regOfferFieldsAreGood() {
		let areGood = true;

		let rentPrice = +$rentPrice.val();
		let commissionRate = +$commissionRate.val();
		let apartmentType = $apartmentType.val();

		if (isNaN(rentPrice) || isNaN(commissionRate)) {
			areGood = false;
		}

		if (rentPrice <= 0) {
			areGood = false;
		}

		if (commissionRate < 0 || commissionRate > 100) {
			areGood = false;
		}

		if (apartmentType === '' || apartmentType.includes(':')) {
			areGood = false;
		}

		return areGood;
	}

	function findOfferFieldsAreGood() {
		let areGood = true;

		let familyBudget = +$familyBudget.val();
		let familyApartmentType = $familyApartmentType.val();
		let familyName = $familyName.val();

		if (isNaN(familyBudget)) {
			areGood = false;
		}

		if (familyBudget <= 0) {
			areGood = false;
		}

		if (familyApartmentType === '' || familyName === '') {
			areGood = false;
		}

		return areGood;
	}
}