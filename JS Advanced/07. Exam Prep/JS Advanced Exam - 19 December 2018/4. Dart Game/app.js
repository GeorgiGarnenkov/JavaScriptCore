function dart() {
	const maxScore = 100;
	const colorMapping = {
		firstLayer: 0,
		secondLayer: 1,
		thirdLayer: 2,
		fourthLayer: 3,
		fifthLayer: 4,
		sixthLayer: 5,
	}
	let isHome = true;

	$('#playBoard').on('click', 'div', onPlayBoardClick);

	function onPlayBoardClick(e) {
		e.stopPropagation();

		let id = $(e.target).attr('id');

		let points = getScore(id);

		selectPlayer(points);

	}

	function getScore(id) {

		let $scoreBoard = $('#scoreBoard');

		let rows = $scoreBoard.find('tbody tr');

		let targetRow = rows.eq(colorMapping[id]);

		let targetCol = targetRow.children().eq(1);

		let points = targetCol.text().split(' ')[0];

		return points;

	}

	function selectPlayer(points) {

		let selector = '';

		isHome ? selector = '#Home' : selector = '#Away';

		let $pointsElement = $(selector).children().eq(0);
		$pointsElement.text((i, t) => Number(t) + +points);

		let currentPoints = Number($pointsElement.text());
		if (currentPoints >= maxScore) {
			
			if (isHome) {
				$('#Home').children().eq(1).css('backgroundColor', 'green');
				$('#Away').children().eq(1).css('backgroundColor', 'red');
			} else {
				$('#Away').children().eq(1).css('backgroundColor', 'green');
				$('#Home').children().eq(1).css('backgroundColor', 'red');
			}

			$('#playBoard').off('click');
		}

		let $turnsFirstP = $('#turns').children().eq(0);
		let $turnsSecondP = $('#turns').children().eq(1);

		if (isHome) {
			let text1 = $turnsFirstP.text().replace('Home', 'Away');
			let text2 = $turnsSecondP.text().replace('Away', 'Home');
			$turnsFirstP.text(text1);
			$turnsSecondP.text(text2);

		} else {
			let text1 = $turnsFirstP.text().replace('Away', 'Home');
			let text2 = $turnsSecondP.text().replace('Home', 'Away');
			$turnsFirstP.text(text1);
			$turnsSecondP.text(text2);
		}
		isHome = !isHome;
	}	
}