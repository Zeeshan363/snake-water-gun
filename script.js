var userScore = 0, compScore = 0;   

for(let i=0; i<10; i++){

    var random = Math.floor(Math.random() * 3);
    var compValue;
    
    switch (random) {
      case 0:
        compValue = 'S';
        break;
      case 1:
        compValue = 'W';
        break;
      case 2:
        compValue = 'G';
        break;
      default:
        // code blockS here
    }
    
    // console.log(compValue)
    let userValue = prompt("Enter S (Snake), W (Water) or G (Gun)")
    // console.log(userValue)

    if(compValue=='S' && userValue=='W' || compValue=='G' && userValue=='S' || compValue=='W' && userValue=='S'){
        compScore++;
    }
    else if(compValue=='S' && userValue=='S' || compValue=='G' && userValue=='G' || compValue=='W' && userValue=='W'){
        console.log("Both have same result")
    }
    else{
        userScore++;
    }
}

console.log("User Score is ", userScore)
console.log("Computer Score is ", compScore)

    

