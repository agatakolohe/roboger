// Business Logic
function beepBoop(inputNumber, name) {
  let numberRange = [];
  for (let i = 0; i <= inputNumber; i++) {
    numberRange.push(i.toString());
    if (numberRange[i].includes("3")) {
      numberRange[i] = "Won't you be my neighbor " + name + "?";
    } else if (numberRange[i].includes("2")) {
      numberRange[i] = "Boop!";
    } else if (numberRange[i].includes("1")) {
      numberRange[i] = "Beep!";
    }
  }
  return numberRange;
}

// UI Logic
$(document).ready(function () {
  $("form#roboger").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const inputNumber = $("input#number").val();
    const boopIt = beepBoop(inputNumber, name);
    $("#result").text(boopIt);

    // cigoL IU esreveR (Reverse UI Logic)
    $(".btn-outline-dark").click(function () {
      $("#reverse").text(boopIt.reverse());
    });
  });
});
