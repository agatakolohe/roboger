$(document).ready(function () {
  $("form#roboger").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const inputNumbers = [];
    inputNumbers.push($("input#number").val());
    let numberRange = [];
    for (let i = 0; i <= inputNumbers; i += 1) {
      numberRange.push(i.toString());
      if (numberRange[i].includes("3")) {
        numberRange[i] = "Won't you be my neighbor " + name + "?";
      } else if (numberRange[i].includes("2")) {
        numberRange[i] = "Boop!";
      } else if (numberRange[i].includes("1")) {
        numberRange[i] = "Beep!";
      }
    }
    $("#result").text(numberRange);
    $(".btn-outline-dark").click(function () {
      $("#reverse").text(numberRange.reverse());
    });
  });
});
