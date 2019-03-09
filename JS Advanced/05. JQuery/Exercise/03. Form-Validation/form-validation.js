function validate() {

	$('#submit').on('click', check);
	$('#company').on('click', showHideCompanyInfo);

	function check(e) {
		e.preventDefault();

		let username = $('#username');
		let email = $('#email');
		let password = $('#password');
		let confirmPassword = $('#confirm-password');
		let companyInfo = $('#companyInfo');
		let companyNumber = $('#companyNumber');
		let isValid = true;

		let regexName = /^[A-Za-z0-9]{3,20}$/g;
		if (!regexName.test(username.val())) {
			username.css('border-color', 'red');
			isValid = false;
		}

		let regexEmail = /(.+)?@(.+)?\.(.+)?/g;
		if (!regexEmail.test(email.val())) {
			email.css('border-color', 'red');
			isValid = false;
		}

		if (!/^\w{5,15}$/g.test(password.val())) {
			password.css('border-color', 'red');
			isValid = false;
		}
		if (!/^\w{5,15}$/g.test(confirmPassword.val()) || password.val() !== confirmPassword.val()) {

			confirmPassword.css('border-color', 'red');
			password.css('border-color', 'red');
			isValid = false;
		}

		if (companyInfo.css('display') !== 'none') {
			if (!/\d/g.test(companyNumber.val())) {
				companyNumber.css('border-color', 'red');
				isValid = false;
			} else {
				if (companyNumber.val() < 1000 || companyNumber.val() > 9999) {
					companyNumber.css('border-color', 'red');
					isValid = false;
				}
			}
		}

		if (isValid) {
			$('#valid').css('display', 'block');
		}
	}

	function showHideCompanyInfo() {
		let companyInfo = $('#companyInfo');

		if (companyInfo.css('display') === 'none') {
			companyInfo.css('display', 'block');
		} else {
			companyInfo.css('display', 'none');
		}
	}
}