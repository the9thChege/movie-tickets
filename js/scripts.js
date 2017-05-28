//Back-end Logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
var defaultPricing = ("0");
var ticketPricing = parseInt(defaultPricing);
var moviePricing = (0);
var timePricing = (0);
var agePricing = (0);

//UI Logic
$(document).ready(function() {
  //Movie Selection

  $("#guardians").click(function() {
    $(".guardians").toggle();
    $("#deadpool").hide();
    $("#cyborg").hide();
    $(".post-releases").hide();
    $(".vintage").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#deadpool").click(function() {
    $("#guardians").hide();
    $(".deadpool").toggle();
    $("#cyborg").hide();
    $(".post-releases").hide();
    $(".vintage").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#cyborg").click(function() {
    $("#guardians").hide();
    $("#deadpool").hide();
    $(".cyborg").toggle();
    $(".post-releases").hide();
    $(".vintage").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#batman-superman").click(function() {
    $(".batman-superman").toggle();
    $("#sleepless").hide();
    $("#kedi").hide();
    $(".new-releases").hide();
    $(".vintage").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#sleepless").click(function() {
    $("#batman-superman").hide();
    $(".sleepless").toggle();
    $("#kedi").hide();
    $(".new-releases").hide();
    $(".vintage").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#kedi").click(function() {
    $("#batman-superman").hide();
    $("#sleepless").hide();
    $(".kedi").toggle();
    $(".new-releases").hide();
    $(".vintage").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#ongBak").click(function() {
    $(".ongBak").toggle();
    $("#solomon").hide();
    $("#crank").hide();
    $(".new-releases").hide();
    $(".post-releases").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#solomon").click(function() {
    $("#ongBak").hide();
    $(".solomon").toggle();
    $("#crank").hide();
    $(".new-releases").hide();
    $(".post-releases").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  $("#crank").click(function() {
    $("#ongBak").hide();
    $("#solomon").hide();
    $(".crank").toggle();
    $(".new-releases").hide();
    $(".post-releases").hide();
    $("h5").hide();
    $(".resetButton").show();
  });
  //Movie Selection

  //Submission
  $("#buttonPress").click(function(event) {
    //Prevent the default page setting
    event.preventDefault();
    $(".btn-info").show();
    $(".pTiming").hide();
    $(".ulTiming").hide();
    $("h1").hide();
    $("h2").hide();
    $("#buttonPress").hide();

    var moviePrice = function(movieCheck){

      if (document.getElementById('guardians').checked || document.getElementById('deadpool').checked) {
        movieCheck = ticketPricing + 500;
      } else if (document.getElementById('cyborg').checked) {
        movieCheck = ticketPricing + 500;
      } else if (document.getElementById('batman-superman').checked || document.getElementById('sleepless').checked) {
        movieCheck = ticketPricing + 350;
      } else if ((document.getElementById('kedi').checked)) {
        movieCheck = ticketPricing + 350;
      } else if (document.getElementById('ongBak').checked || document.getElementById('solomon').checked) {
        movieCheck = ticketPricing + 200;
      } else if ((document.getElementById('crank').checked)) {
        movieCheck = ticketPricing + 200;
      } else {
        alert("Movie Selection Error! You picked no movie OR more than one.");
        $(document).reload(true);
      }
      moviePricing = movieCheck;
      return moviePricing;
    };

    var timePrice = function(timeCheck){
      var setTime = $('select[name=time]').val();

      if (setTime === "1") {
        timeCheck = ticketPricing + 100;
      } else if (setTime === "2") {
        timeCheck = ticketPricing + 200;
      }else if (setTime === "3") {
        timeCheck = ticketPricing + 200;
      } else if (setTime === "4") {
        timeCheck = ticketPricing + 100;
      } else if (setTime === "5") {
        timeCheck = ticketPricing + 50;
      }

      timePricing = timeCheck;
      return timePricing;
    };

    var agePrice = function(ageCheck){
      var inputAge = $("input#ages").val();
      var Age = parseInt(inputAge);

      if (Age <= 12) {
        ageCheck = ticketPricing - 50;
      } else if (Age <= 45) {
        ageCheck = ticketPricing;
      } else {
        ageCheck = ticketPricing - 20;
      }

      agePricing = ageCheck;
      return agePricing;
    };

    $("#output").text(ticketPricing + moviePrice(moviePricing) + timePrice(timePricing) + agePrice(agePricing) + "Ksh");
    $(".output").show();
  });
});
