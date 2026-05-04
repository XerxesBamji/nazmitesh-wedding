window.addEventListener('load', function() {
  setTimeout(function() {
    const parentElement = document.getElementById('tbody1');
    const cardRankings = Array.from(parentElement.querySelectorAll('.card-ranking'));

    cardRankings.sort((a, b) => {
      const scoreA = parseInt(a.querySelector('.score').innerText);
      const scoreB = parseInt(b.querySelector('.score').innerText);
      return scoreB - scoreA;
    });

    cardRankings.forEach((cardRanking, index) => {
      const rankingNumber = cardRanking.querySelector('.ranking-number');
      const newClass = `ranking-number${index + 1}`;
      rankingNumber.classList.add(newClass);
      rankingNumber.innerText = (index + 1).toString();
      parentElement.appendChild(cardRanking);
    });
  }, 1000); // Adjust the delay time as needed
});

$("#submit-button").click(function() {
    window.location.reload();
})
