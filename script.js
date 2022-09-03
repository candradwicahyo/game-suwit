window.onload = () => {
  
  let again = true;
  let limit = 3;
  
  let scorePlayer = 0;
  let scoreComputer = 0;
  
  function startGame() {
    while (again) {
      let player = prompt('pilih antara gunting, batu atau kertas?');
      let computer = setComputer(getRandomNumber(1, 3));
      let validate = setGames(player, computer);
      
      showResult(player, computer, validate);
      setScorePlayer(validate);
      
      alert(`skor sementara :
        pemain : (${scorePlayer}) poin
        komputer : (${scoreComputer}) poin
      `);
      
      setWinner();
    }
  }
  
  startGame();
  
  alert('terima kasih sudah bermain bersama kami')
  
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function setComputer(number) {
    if (number == 1) return 'gunting';
    if (number == 2) return 'batu';
    if (number == 3) return 'kertas';
    
    return 'error in function setComputer()';
  }
  
  function setGames(player, computer) {
    if (player == computer) return 'imbang';
    if (player == 'gunting') return (computer == 'kertas') ? 'menang' : 'kalah';
    if (player == 'batu') return (computer == 'gunting') ? 'menang' : 'kalah';
    if (player == 'kertas') return (computer == 'batu') ? 'menang' : 'kalah';
    
    return 'error in function setGames()';
  }
  
  function setScorePlayer(result) {
    if (result.toLowerCase() == 'menang') scorePlayer++;
    if (result.toLowerCase() == 'kalah') scoreComputer++;
  }
  
  function playAgain() {
    let ask = confirm('mau bermain lagi?');
    if (ask == true) {
      resetScore();
      startGame();
    } else {
      again = false;
    }
  }
  
  function resetScore() {
    scorePlayer = 0;
    scoreComputer = 0;
  }
  
  function showResult(player, computer, result) {
    alert(`pemain memilih : ${player} dan komputer memilih : ${computer}. maka, hasilnya adalah pemain dinyatakan : ${result}`)
  }
  
  function setWinner() {
    if (scorePlayer == limit) {
      alert(`pemain memenangkan permainan ini dengan skor ${scorePlayer} - ${scoreComputer}`);
      playAgain();
    }
    
    if (scoreComputer == limit) {
      alert(`komputer memenangkan permainan ini dengan skor ${scoreComputer} - ${scorePlayer}`);
      playAgain();
    }
  }
  
}