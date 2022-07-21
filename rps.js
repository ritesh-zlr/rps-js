var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var attacks = 5;

var choices = ["rock", "paper", "scissor"];
window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = choices[i] + '.jpg';
        choice.addEventListener('click', selectChoice);
        document.getElementById('choices').appendChild(choice);
        //dynamically adding element
    }
}


function selectChoice() {
    you = this.id;
    document.getElementById('your-choice').src = you + '.jpg';

    //Random for opponent
    opponent = choices[Math.floor(Math.random() * 3)];// randomly coming 0.99*3
    document.getElementById('opponent-choice').src = opponent + '.jpg'

    //check the winner
    if (you == opponent) {
        // yourScore +=1;
        // opponentScore +=1;
        // alert('Match Tied');
        document.getElementById('tied').innerHTML = 'Match Tied';
    }
    else {
        document.getElementById('tied').innerHTML = '';
        if (you == 'rock') {
            if (opponent == 'scissor') {
                yourScore += 1;
                document.getElementById('tied').innerHTML = 'User Won';
            }
            else if (opponent == 'paper') {
                opponentScore += 1;
                document.getElementById('tied').innerHTML = 'Computer Won';
            }
        }
        if (you == 'paper') {
            if (opponent == 'rock') {
                yourScore += 1;
                document.getElementById('tied').innerHTML = 'User Won';
            }
            else if (opponent == 'scissor') {
                opponentScore += 1;
                document.getElementById('tied').innerHTML = 'Computer Won';
            }
        }
        if (you == 'scissor') {
            if (opponent == 'paper') {
                yourScore += 1;
                document.getElementById('tied').innerHTML = 'User Won';
            }
            else if (opponent == 'rock') {
                opponentScore += 1;
                document.getElementById('tied').innerHTML = 'Computer Won';
            }
        }
    }
    document.getElementById('your-score').innerText = yourScore;
    document.getElementById('opponent-score').innerText = opponentScore;

    if (yourScore > 2 || opponentScore > 2) {
        alert("Game Over");

        setTimeout(() => {
            yourScore = 0;
            opponentScore = 0
            document.getElementById('your-score').innerText = yourScore;
            document.getElementById('opponent-score').innerText = opponentScore;
        }, 5000);
    }

}
