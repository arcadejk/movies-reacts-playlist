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

const video = document.getElementById("video-player");

let userData = {
  movies: [...allMovies],
  currentMovie: null,
  movieCurrentTime: 0,
};

const playMovie = (id) => {
  const movie = userData?.movies.find((movie) => movie.id === id);

  if (!movie) {
    console.error("Movie not found for id:", id);
    return;
  }

  video.src = movie.src;
  video.title = movie.title;

  if (userData?.currentMovieIndex === null || userData?.currentMovieIndex !== id) {
    video.currentTime = 0;
  } else {
    video.currentTime = userData?.movieCurrentTime;
  }

  userData.currentMovieIndex = id;
  playButton.classList.add("playing");

  setPlayerDisplay();
  video.play();
};