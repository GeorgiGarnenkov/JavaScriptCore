function attachEvents() {
  const baseUrl = "https://xs-ranking.firebaseio.com/";

  $("#btnRanking").on("click", load);
  $("#btnReload").on("click", reload);

  function load() {
    $.ajax({
      url: baseUrl + "ranking.json",
      method: "GET",
      success: displayRanking,
      error: handleError
    });
  }

  function reload() {
    $("#tablebody").empty();
    load();
    $("#timer").css("visibility", "visible");
    ProgressCountdown(10, "pageBeginCountdown", "pageBeginCountdownText");
    document.getElementById("btnReload").disabled = true;
    setTimeout(function() {
      document.getElementById("btnReload").disabled = false;
      $("#timer").css("visibility", "hidden");
    }, 10000);
  }

  function ProgressCountdown(timeleft, bar, text) {
    return new Promise((resolve, reject) => {
      var countdownTimer = setInterval(() => {
        timeleft--;

        document.getElementById(bar).value = timeleft;
        document.getElementById(text).textContent = timeleft;

        if (timeleft <= 0) {
          clearInterval(countdownTimer);
          resolve(true);
        }
      }, 1000);
    });
  }

  function displayRanking(data) {
    var status = $.getJSON(baseUrl + "status.json", function(statusData) {
      if (statusData === 1) {
        var tableBody = $("#tablebody");
        tableBody.empty();

        for (var i = 0; i < data.length; i++) {
          var element = data[i];

          if (element !== null) {
            var tr = $('<tr class="tr">');
            var trSpacer = $('<tr id="spacer">');
            var td1 = $('<td style="text-align:center">');
            var td2 = $('<td id="name">');
            var td3 = $('<td id="club">');
            var td4 = $('<td style="text-align:center">');
            var td5 = $('<td style="text-align:center">');
            var td6 = $('<td style="text-align:center">');

            var rank = Object.keys(data)[i];
            var name = element["name"];
            var club = element["club"];
            var level = element["level"];
            var experience = element["experience"];

            td1.append(rank);
            td2.append(
              $('<img src="./avatarIcon.png" alt="Avatar" class="image">')
            );
            td2.append(name);
            td3.append(club);
            td4.append(level);
            td5.attr("id", "td");
            td5.append(experience);
            td6.append($('<a href="#"><i class="fa fa-envelope"></i></a>'));

            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);

            tableBody.append(tr);
            tableBody.append(trSpacer);
          }
        }
      } else {
        handleError();
      }
    });
  }

  function handleError() {
    var message = $("<h2>ERROR</h2><h5>Error text</h5>");
    var errorBox = $("#errorBox");
    errorBox.empty();
    errorBox.append(message);
    errorBox.show();
    setTimeout(() => errorBox.fadeOut(), 4000);
  }
}
