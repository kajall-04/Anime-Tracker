const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Allow cross-origin requests from frontend

// Example route for user data
app.get('/user', (req, res) => {
  res.json({
    username: "@NexodeUser",
    bio: "Loves Psychological Anime",
    currentlyWatching: "Jujutsu Kaisen - Ep 20",
    progress: 80,
    watchToday: "2h 10m",
    watchWeek: "10h 30m"
  });
});

// Starting the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
