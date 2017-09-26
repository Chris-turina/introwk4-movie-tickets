//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.fullTicket = function() {
  return this.movie + ", " + this.time + ", " + this.age;
}

Ticket.prototype.calculateCost = function () {
  var finalCost = 0;
  if ((this.movie === "Pokemon") || (this.movie === "James Bond")) {
    finalCost += 4;
  }
  else {
    finalCost += 6;

  }return finalCost;
}
  // if ((this.time === "12-pm") || (this.time === "3-pm")) {
  //   finalCost += 0;
  // }  else {
  //   finalCost += 3;
  // }
  // if (this.age === "Adult") {
  //   finalCost += 2;
  // }  else if (this.age === "Youth") {
  //   finalCost += 1;
  // } else {
  //   finalCost += 0;
  // } return;



//front-end logic
$(document).ready(function(){
  $("#movie-ticket").submit(function(event) {
    event.preventDefault();
    var movie = $("#movie").val();
    var time = $("#time").val();
    var age = $("#age").val();
    var ticketInfo = new Ticket(movie, time, age);
    var ticketDisplay = ticketInfo.fullTicket();
    var ticketCost = ticketInfo.calculateCost();
    $("#result").text(ticketDisplay);
    $("#cost").text(ticketCost);
  })

});
