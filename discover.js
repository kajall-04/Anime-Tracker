const episodes = ["Naruto Ep 47", "Bleach Ep 12", "Spy x Family Ep 6"];
function pickRandomEpisode() {
  const rand = episodes[Math.floor(Math.random() * episodes.length)];
  alert("Try watching: " + rand);
}

// Chart.js for watch time (optional if chart canvas is added)
const ctx = document.getElementById('progressChart')?.getContext('2d');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Watch Time (mins)',
        data: [30, 45, 50, 40, 60, 80, 75],
        borderColor: 'rgb(11, 69, 69)',
        backgroundColor: 'rgba(166, 16, 121, 0.2)',
        fill: true,
      }]
    }
  });
}

// Lottie animation for Discover
lottie.loadAnimation({
  container: document.getElementById('discoverLottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_lgcutb3d.json'
});
