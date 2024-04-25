//Creating play, pause and shuffle variables
// Get DOM elements
const playlistMovies = document.getElementById("playlist-movies");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const shuffleButton = document.getElementById("shuffle");

// Define movies and user data
const allMovies = [
    {
      id: 0,
      title: "MIDNIGHT RUNNERS 청년경찰 Movie Reaction!",
      author: "CineTofu",
      duration: "43:31",
      src: "assets/movies/MIDNIGHT_RUNNER.mp4",
    },
    {
      id: 1,
      title: "We all finally watched *THE GANGSTER, THE COP, THE DEVIL* Movie REACTION",
      author: "Bros N' Shows",
      duration: "45:22",
      src: "assets/movies/We_all_finally_watched_THE_GANGSTER.mp4",
    },
    {
      id: 2,
      title: "EXTREME JOB 극한직업 Took Us Out! | Hilarious Korean Movie Reaction!",
      author: "CineTofu",
      duration: "41:23",
      src: "assets/movies/EXTREME_JOB.mp4",
    },
    {
      id: 3,
      title: "Korean SF Sniper visits a US Gun Store REACTION",
      author: "OB Dave Reacts",
      duration: "26:42",
      src: "assets/movies/Korean_SF_Sniper_visits.mp4",
    },
  ];