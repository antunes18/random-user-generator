const app = Vue.createApp({
  data() {
    return {
      user: "Thiago Antunes",
      email: "thiago.antunes@gmail.com",
      age: 18,
      gender: "male",
      city: "Araguaína",
      state: "Tocantins",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
    };
  },
  methods: {
    async getUser() {
      const response = await fetch("https://randomuser.me/api/");
      const { results } = await response.json();

      this.user =
        results[0].name.title +
        ". " +
        results[0].name.first +
        " " +
        results[0].name.last;
      this.email = results[0].email;
      this.age = results[0].dob.age;
      this.gender = results[0].gender;
      this.city = results[0].location.city;
      this.state = results[0].location.state;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
