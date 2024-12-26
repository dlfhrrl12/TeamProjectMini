document.querySelectorAll('.memberCard').forEach(card => {
  card.addEventListener('click', () => {
    const bio = card.querySelector('.bio');
    bio.classList.toggle('show');
    card.classList.toggle('active'); // active 클래스 토글
  });
});