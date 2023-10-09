//GET DOM ELEMENTS
const resultContainer=document.querySelector('#result');
const computerSelectionContainer=document.querySelector('#computerSelection');
const playerSelectionContainer = document.querySelector('#playerSelection');

//ADD BUTTON EVENT LISTENERS FOR PLAYER SELECTION
const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
  button.addEventListener('click', function() {
  const playerSelection = button.getAttribute('data-choice');
    playRound(playerSelection);
  });
});

  //GET COMPUTER SELECTION

  function getComputerChoice(){
      const words=[]
      words[0]='rock'
      words[1]='paper'
      words[2]='scissors'
      const index= Math.floor(Math.random()*words.length);
      return words[index]
      }

  //GET ROUND WINNER
  function roundWinner(playerSelection,computerSelection){
  if (playerSelection==='rock' && computerSelection==='scissors'){
      return 'Rock beats Scissors,you WIN!'
  }
  if (playerSelection==='rock' && computerSelection==='paper'){
      return 'LOST!'
  }
  
  if (playerSelection===computerSelection){
      return 'DRAW'
  }
  if (playerSelection==='paper' && computerSelection==='rock'){
      return 'Paper beats Rock,you WIN!'
  }
  if (playerSelection==='paper' && computerSelection==='scissors'){
      return 'LOST!'
  }
  if (playerSelection==='scissors' && computerSelection==='paper'){
      return 'Scissors beats Paper,you WIN!'
  }
  if (playerSelection==='scissors' && computerSelection==='rock'){
      return 'LOST!'
  }
  }

 //PLAY A ROUND 
  function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    const roundResult = roundWinner(playerSelection,computerSelection);
    displayResult(playerSelection,computerSelection,roundResult)
}

//DISPLAY RESULTS ON WEBPAGE
function displayResult(playerSelection,computerSelection,roundResult) {
  resultContainer.textContent = roundResult;
  playerSelectionContainer.textContent ='You chose:  ' + playerSelection;
  computerSelectionContainer.textContent ='Computer chose:  ' + computerSelection;
}  

  
  
  
  
  
  
  
  
  
  
  
          
  
  
  
  
  
  