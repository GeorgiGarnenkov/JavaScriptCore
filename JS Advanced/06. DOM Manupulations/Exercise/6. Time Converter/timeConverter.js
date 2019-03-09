function attachEventsListeners() {
    // TODO: attach click events to all buttons

    let $days = $('#days');
    let $hours = $('#hours');
    let $minutes = $('#minutes');
    let $seconds = $('#seconds');

    let $daysBtn = $('#daysBtn');
    $daysBtn.on('click', function () {
      $hours.val(+$days.val() * 24);
      $minutes.val(+$days.val() * 1440);
      $seconds.val(+$days.val() * 86400);
    });

    let $hoursBtn = $('#hoursBtn');
    $hoursBtn.on('click', function () {
      $days.val(+$hours.val() / 24);
      $minutes.val(+$hours.val() * 60);
      $seconds.val(+$hours.val() * 60 * 60);
    });

    let $minutesBtn = $('#minutesBtn');
    $minutesBtn.on('click', function () {
      $days.val(+$minutes.val() / 60 / 24);
      $hours.val(+$minutes.val() / 60);
      $seconds.val(+$minutes.val() * 60);
    });

    let $secondsBtn = $('#secondsBtn');
    $secondsBtn.on('click', function () {
      $days.val(+$seconds.val() / 60 / 60 / 24);
      $hours.val(+$seconds.val() / 60 / 60);
      $minutes.val(+$seconds.val() / 60);
    });
  }
  