document.addEventListener('alpine:init', () => {
    Alpine.data('clubDashboard', () => ({
      modalOpen: false,
      selectedClub: null,
      search: '',
      clubs: [],
      filteredClubs: [],
      fetchAnimeData() {
        const genreMap = {
          '🔥 Shonen Lovers': 27,
          '💘 Romantic Hearts': 22,
          '🧠 Seinen Scholars': 42
        };
        const baseClubs = {
          '🔥 Shonen Lovers': {
            name: '🔥 Shonen Lovers',
            desc: 'Top battle/action series ranked by fans.',
            color: 'text-blue-400',
            members: '2.3K',
            featured: []
          },
          '💘 Romantic Hearts': {
            name: '💘 Romantic Hearts',
            desc: 'Heartfelt romantic anime and tearjerkers.',
            color: 'text-pink-400',
            members: '1.8K',
            featured: []
          },
          '🧠 Seinen Scholars': {
            name: '🧠 Seinen Scholars',
            desc: 'Philosophical and mature storytelling.',
            color: 'text-green-400',
            members: '1.2K',
            featured: []
          },
          '🎭 Cosplay Central': {
            name: '🎭 Cosplay Central',
            desc: 'Discuss cosplay from characters like Nezuko, Gojo, and Anya!',
            color: 'text-pink-300',
            members: '950',
            featured: ['Nezuko', 'Gojo Satoru', 'Anya Forger']
          },
          '🎬 AMV Creators': {
            name: '🎬 AMV Creators',
            desc: 'Sync anime scenes to music. Naruto, Tokyo Ghoul, Demon Slayer edits!',
            color: 'text-yellow-400',
            members: '1.4K',
            featured: ['Naruto AMVs', 'Tokyo Ghoul edits', 'Demon Slayer music videos']
          }
        };
        const requests = Object.entries(genreMap).map(([key, genreId]) => {
          return axios.get(`https://api.jikan.moe/v4/anime?genres=${genreId}&order_by=score&sort=desc&limit=5`)
            .then(res => {
              baseClubs[key].featured = res.data.data.map(a => a.title);
            })
            .catch(err => console.error(`Error fetching ${key}:`, err));
        });
        Promise.all(requests).then(() => {
          this.clubs = Object.values(baseClubs);
          this.filteredClubs = this.clubs;
        });
      },
      filterByGenre(genre) {
        const keywordMap = {
          'Shonen': 'Shonen',
          'Romance': 'Romantic',
          'Seinen': 'Seinen',
          'Cosplay': 'Cosplay',
          'AMV': 'AMV'
        };
        this.filteredClubs = this.clubs.filter(club => club.name.includes(keywordMap[genre]));
      }
    }));
  });
  
  // Lottie animation
  lottie.loadAnimation({
    container: document.getElementById('clubsLottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_9zqGKH.json'
  });
  