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

const pauseMovie = () => {
    userData.movieCurrentTime = video.currentTime;
    
    playButton.classList.remove("playing");
    video.pause();
  };
  
  const shuffle = () => {
    userData?.movies.sort(() => Math.random() - 0.5);
    userData.currentMovie = null;
    userData.movieCurrentTime = 0;
  
    renderMovies(userData?.movies);
    pauseMovie();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
  };
  
  const deleteMovie = (id) => {
    if (userData?.currentMovie?.id === id) {
      userData.currentMovie = null;
      userData.movieCurrentTime = 0;
  
      pauseMovie();
      setPlayerDisplay();
    }
  
    userData.movies = userData?.movies.filter((movie) => movie.id !== id);
    renderMovies(userData?.movies); 
    highlightCurrentMovie(); 
    setPlayButtonAccessibleText(); 
  
    if (userData?.movies.length === 0) {
      const resetButton = document.createElement("button");
      const resetText = document.createTextNode("Reset Playlist");
  
      resetButton.id = "reset";
      resetButton.ariaLabel = "Reset playlist";
      resetButton.appendChild(resetText);
      playlistMovies.appendChild(resetButton);
  
      resetButton.addEventListener("click", () => {
        userData.movies = [...allMovies];
  
        renderMovies(sortMovies()); 
        setPlayButtonAccessibleText();
        resetButton.remove();
      });
    }
  };
  
  const setPlayerDisplay = () => {
    const playingMovie = document.getElementById("player-movie-title");
    const movieArtist = document.getElementById("player-movie-artist");
    const currentTitle = userData?.currentMovie?.title;
    const currentArtist = userData?.currentMovie?.author;
  
    playingMovie.textContent = currentTitle ? currentTitle : "";
    movieArtist.textContent = currentArtist ? currentArtist : "";
  };
  
  const highlightCurrentMovie = () => {
    const playlistMovieElements = document.querySelectorAll(".playlist-movie button");
    const movieToHighlight = document.getElementById(`movie-${userData?.currentMovie?.id}`);
  
    playlistMovieElements.forEach((movieEl) => {
      movieEl.removeAttribute("aria-current");
    });
  
    if (movieToHighlight) movieToHighlight.setAttribute("aria-current", "true");
  };

  const renderMovies = (array) => {
    const moviesHTML = array
      .map((movie)=> {
        return `
        <li id="movie-${movie.id}" class="playlist-movie">
          <button class="playlist-movie-info" onclick="playMovie(${movie.id})">
            <span class="playlist-movie-title">${movie.title}</span>
            <span class="playlist-movie-artist">${movie.author}</span>
            <span class="playlist-movie-duration">${movie.duration}</span>
          </button>
          <button onclick="deleteMovie(${movie.id})" class="playlist-movie-delete" aria-label="Delete ${movie.title}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </li>
        `;
      })
      .join("");
  
    playlistMovies.innerHTML = moviesHTML;
  };
  const setPlayButtonAccessibleText = () => {
    const movie = userData?.currentMovie || userData?.movies[0];
  
    playButton.setAttribute(
      "aria-label",
      movie?.title ? `Play ${movie.title}` : "Play"
    );
  };
  
  const getCurrentMovieIndex = () => userData?.movies.indexOf(userData?.currentMovie);
  
  playButton.addEventListener("click", () => playMovie(userData.movies[0].id));
  pauseButton.addEventListener("click",  pauseMovie);
  shuffleButton.addEventListener("click", shuffle);
  
  const sortMovies = () => {
    userData?.movies.sort((a,b) => {
      if (a.title < b.title) {
        return -1;
      }
  
      if (a.title > b.title) {
        return 1;
      }
  
      return 0;
    });
  
    return userData?.movies;
  };
  
  renderMovies(sortMovies());
  setPlayButtonAccessibleText(); 