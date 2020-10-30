//Business Logic
// let numberRange = inputNumbers.map(number => {
//   if (number.toString().split("").includes("3")) {
//     numberRange.replace("3", "Wont'you be my neighbor?")
//   }
//   else if (number.toString().split("").includes("2")) {
//     numberRange.replace("2", "Boop!")
//   }
//   else if (number.toString().split("").includes("")) {
//     numberRange.replace("1", "Beep!")
// });

$(document).ready(function () {
  $("form#roboger").submit(function (event) {
    event.preventDefault();
    const inputNumbers = [];
    inputNumbers.push($("input#number").val());

    let numberRange = [];

    for (let i = 0; i <= inputNumbers; i += 1) {
      numberRange.push(i.toString());
      if (numberRange[i].includes("3")) {
        numberRange[i] = "Won't you be my neighbor?";
      } else if (numberRange[i].includes("2")) {
        numberRange[i] = "Boop!";
      } else if (numberRange[i].includes("1")) {
        numberRange[i] = "Beep!";
      }
    }

    // numberRange.forEach(function (number) {
    //   if (numberRange[number].includes("3")) {
    //     numberRange[number] = "Won't you be my neighbor?";
    //   } else if (numberRange[number].includes("2")) {
    //     numberRange[number] = "Boop!";
    //   } else if (numberRange[number].includes("1")) {
    //     numberRange[number] = "Beep!";
    //   }
    // });
    $("#result").text(numberRange);
  });
});

// for (let i = 0; i <= inputNumbers; i += 1) {
//   numberRange.push(i.toString());
// };

// numberRange.push(i.toString());
// let numberRange = [];
//  numberRange.forEach(function(number) {
//    if (numberRange[number].includes("3")) {
//     numberRange[number] ="Won't you be my neighbor?";
//    }
//    else if (numberRange[number].includes("2")) {
//      numberRange[number] = "Boop!";
//    }
//    else if (numberRange[number].includes("1")) {
//      numberRange[number] = "Beep!"
//    }
// });

// if (number.toString().split("").includes("3")) {
//   numberRange.replace(number, "Wont'you be my neighbor?");
// } else if (number.toString().split("").includes("2")) {
//   numberRange.replace(number, "Boop!");
// } else if (number.toString().split("").includes("1")) {
//   numberRange.replace(number, "Beep!");
// let numberRange = [];
//  numberRange.forEach(function(number) {
//    if (numberRange[number].includes("3")) {
//     numberRange[number] ="Won't you be my neighbor?";
//    }
//    else if (numberRange[number].includes("2")) {
//      numberRange[number] = "Boop!";
//    }
//    else if (numberRange[number].includes("1")) {
//      numberRange[number] = "Beep!"
//    }
// })
