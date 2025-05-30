const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');

function getcompCh() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(userCh, compCh) {
  if (userCh === compCh) {
    return "It's a tie!";
  }
  if (
    (userCh === 'Rock' && compCh === 'Scissors') ||
    (userCh === 'Paper' && compCh === 'Rock') ||
    (userCh === 'Scissors' && compCh === 'Paper')
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userCh = button.textContent;
    const compCh = getcompCh();
    const winner = getWinner(userCh, compCh);

    result.textContent = `You chose: ${userCh} , Computer chose: ${compCh}. ${winner}`;
  });
});
