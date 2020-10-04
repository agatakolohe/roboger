$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    
    const inputNumbers = [];
    inputNumbers.push($("input#number").val());

    let numberRange = [];
    for (let i = 0; i <= inputNumbers; i += 1) {
      numberRange.push(i.toString());
    };

     numberRange.forEach(function(number) { 
       if (numberRange[number].includes("3")) {
        numberRange[number] ="Won't you be my neighbor?";
       }
       else if (numberRange[number].includes("2")) {
         numberRange[number] = "Boop!";
       }
       else if (numberRange[number].includes("1")) {
         numberRange[number] = "Beep!"
       }
    });

    console.log(numberRange);
    $("#result").text(numberRange);

  });
});

   // split array
    // numberRange.forEach(function(number) {
    //   numberRange.push(number.split(" "));
    // });
      //let splitRange = [];
      //splitRange = numberRange.split(" ");
   
    //console.log(splitRange);
   
    //let beepRange =  numberRange.split(' ')