$(document).ready(function() {
  
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    
    const inputNumbers = [];
    inputNumbers.push($("input#number").val());

    let numberRange = [];
    for (let i = 0; i <= inputNumbers; i += 1) {
      numberRange.push(i);
    };
    console.log(inputNumbers);
    $("#result").text(numberRange);



  });
});