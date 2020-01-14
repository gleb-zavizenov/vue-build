// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: "True",
      name: "Anime boi",
      avatar: "thor.png",
      isLoggedIn: true
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    showDetails: false
  },

  methods: {
    logInAndOut(){
      this.user.isLoggedIn = this.user.isLoggedIn ? false : true;
    },

    setUserPrefs(){
      console.log("Open user preferences!");
    }
  }
});

Vue.component('movie-post', {
  props: ['image', 'name', 'description'],
  template: `
  <li>
    <a>
      <img v-bind:src="'images/' + movie.thumb" :alt="movie.name">
      <h2>{{movie.name}}</h2>
      <p>{{movie.description}}</p>
    </a>
  </li>
  `
})