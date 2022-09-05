window.onload = () => {
  
  let again = true;
  let limit = 3;
  
  let scorePlayer = 0;
  let scoreComputer = 0;
  
  function startGame() {
    while (again) {
      let player = prompt('pilih antara gunting, batu atau kertas?');

      if (player == `` || !player) return again = false;

      let computer = setComputer(Math.random());
      let validate = setGames(player.trim().toLowerCase(), computer);
      
      showResult(player.trim().toLowerCase(), computer, validate);
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
  
  
  function setComputer(number) {
    if (number < 0.34) return 'gunting';
    if (number >= 0.34 && number <= 0.67) return 'batu';
    return 'kertas';
  }
  
  function setGames(player, computer) {
    if (player == computer) return 'imbang';
    if (player == 'gunting') return (computer == 'kertas') ? 'menang' : 'kalah';
    if (player == 'batu') return (computer == 'gunting') ? 'menang' : 'kalah';
    if (player == 'kertas') return (computer == 'batu') ? 'menang' : 'kalah';
    
    return `bego! udah dikasih tau pilih gunting, batu atau kertas. malah jawab ${player}`;
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
