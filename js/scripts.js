$(document).ready(function() {
  
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    
    const inputNumbers = [];
    inputNumbers.push($("input#number").val());

    let numberRange = [];
    for (let i = 0; i <= inputNumbers; i += 1) {
      numberRange.push(i.toString());
    };
    //let beepRange =  numberRange.split(' ')
    

     numberRange.forEach(function(i) { 
      //make new array to string from range
       if (numberRange[i] === "1") {
        numberRange[i] = "Beep!";
       }
       else if (numberRange[i] === "2") {
         numberRange[i] = "Boop!";
       }

    });

    console.log(numberRange);
    $("#result").text(numberRange);

  });
});