function timer() {
   let seconds = $('#seconds');
   let minutes = $('#minutes');
   let hours = $('#hours');

   let startBtn = $('#start-timer');
   let stopBtn = $('#stop-timer');
   let isTicking = false;

   let timer;

   startBtn.on('click', function () {
      if (!isTicking) {
         timer = setInterval(secondsUpdate, 1000);
         isTicking = true;
      }
   });

   stopBtn.on('click', stop);

   function secondsUpdate() {

      if (+seconds.text() < 9) {
         return seconds.text('0' + (+seconds.text() + 1))
      }
      if (+seconds.text() === 59) {
         minutesUpdate();
         return +seconds.text('00');
      }

      return seconds.text(+seconds.text() + 1);
   }
   function minutesUpdate() {
      if (+minutes.text() < 9) {
         return minutes.text('0' + (+minutes.text() + 1))
      }
      if (+minutes.text() === 59) {
         if (+hours.text() >= 9) {
            hours.text(+hours.text() + 1);
         }
         hours.text('0' + (+hours.text() + 1));
         return +minutes.text('00');
      }

      return minutes.text(+minutes.text() + 1);
   }

   function stop() {
      clearInterval(timer);
      isTicking = false;
   }

   
}