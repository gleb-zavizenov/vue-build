// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

Vue.component('poster', {
  props: {
    name: String,
    thumb: String,
    vidsource: String
  },
  template: `
  <li>
    <a :href="vidsource" v-on:click.prevent="$emit('make-selection')">
      <img v-bind:src="'images/' + thumb" alt="movie poster">
    </a>
  </li>
  `
})

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {},

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    videotitle: "video title goes here",
    videodescription: "description",
    videosource: "",

    showDetails: false
  },

  created: function() {
    console.log('Created lifecycle hook fired');
    this.fetchUsers();
  },

  methods: {
    logInAndOut(){
      this.user.isLoggedIn = this.user.isLoggedIn ? false : true;
    },

    setUserPrefs(){
      console.log("Open user preferences!");
    },

    loadMovie({name, description, vidsource}){
      //debugger;
      this.videotitle = name;
      this.videodescription = description;
      this.videosource = vidsource;

      this.showDetails = true;
    },

    fetchUsers(){
      // get our user data here
      console.log('fetch user data here');
      const url = './includes/index.php?user=true';
      fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.user = data[0];
        console.log(this.user);
      })
      .catch((err) => console.log(err))
    }
  }
});