let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


choices.forEach((choice) => {
	
	const genCompChoice = () => { // to generate random choice from computer
	const options = ["rock", "paper", "scissors"]; // store into Array for choice 
	const randIdx = Math.floor(Math.random() * 3);	// to generate random number only intiger no
	return options[randIdx];
	};
	const drawGame = () => {
		
		msg.innerText = "Game was Draw Play Again";
		msg.style.backgroundColor = "blue";
	}
	const showWinner = (userWin, userChoice, compChoice) => {
		if(userWin) {
			
			userScore++;
			userScorePara.innerText = userScore;
			
			msg.innerText = `You Win!!!!! Your ${userChoice} beats ${compChoice}`;
			msg.style.backgroundColor = "#99cc00";
		}else{
			compScore++;
			compScorePara.innerText = compScore;
			
			msg.innerText = `You Lost!!!!! Computer ${compChoice} beats your ${userChoice}`;
			msg.style.backgroundColor = "red";
		}
	} 
	

	const playGame = (userChoice) => {
	console.log("user choice = ", userChoice);
	
	const compChoice = genCompChoice();
	console.log("Computer choice = ", compChoice);
		if(userChoice === compChoice){
			drawGame();
		} else{
			let userWin = true;
			if(userChoice === "rock"){
				userWin = compChoice === "paper" ? false : true;
			}else if (userChoice === "paper"){
				userWin = compChoice === "Scissors" ? false : true;
			}else if (userChoice === "Scissors"){
				userWin = compChoice === "paper" ? false : true;
			}else {
				userWin = compChoice === "rock" ? false : true;
			}
			showWinner(userWin, userChoice, compChoice);
		}
	
	};
	
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id"); // to get id 
		//console.log("choise was clicked", userChoice); // display  massege and id
		playGame(userChoice); // call a gamefuction 
	});
});
