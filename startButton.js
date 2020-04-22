let resultScore = 0;
function startButton() {
    document.getElementById("wrapper").style.display="none";
    document.getElementById("container").style.display="block";
    document.getElementById("result").style.display="block";
}   function playRound(playerSelection) {
        let computerSelection = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
        //1 = rock, 2 = paper, 3 = scissors
        if (playerSelection == "rock" && computerSelection == 1) {
            resultScore += 0;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'A Draw';
            return document.getElementById('score').innerHTML = resultScore;
        } else if (playerSelection == "rock" && computerSelection == 2) {
            resultScore -= 1;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'You lost! I picked paper.';
            return document.getElementById('score').innerHTML = resultScore;
        } else if (playerSelection == "rock" && computerSelection == 3) {
            resultScore += 1;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'You win! I picked Scissors.';
            return document.getElementById('score').innerHTML = resultScore;;
        } else if (playerSelection == "paper" && computerSelection == 1) {
            resultScore += 1;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'You win! I picked Rock!';
            return document.getElementById('score').innerHTML = resultScore;
        } else if (playerSelection == "paper" && computerSelection == 2) {
            resultScore += 0;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'A Draw';
            return document.getElementById('score').innerHTML = resultScore;
        } else if (playerSelection == "paper" && computerSelection == 3) {
            resultScore -= 1;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'You lost! I picked scissors.';
            return document.getElementById('score').innerHTML = resultScore;
        } else if (playerSelection == "scissors" && computerSelection == 1) {
            resultScore -= 1;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'You lost! I picked rock.';
            return document.getElementById('score').innerHTML = resultScore;
        } else if (playerSelection == "scissors" && computerSelection == 2) {
            resultScore += 1;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'You win! I picked paper!';
            return document.getElementById('score').innerHTML = resultScore;
        } else if (playerSelection == "scissors" && computerSelection == 3) {
            resultScore += 0;
            console.log(computerSelection);
            document.getElementById('result').innerHTML = 'A Draw';
            return document.getElementById('score').innerHTML = resultScore;
        }
    } 

