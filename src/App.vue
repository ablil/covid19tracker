<template>
  <div id="app">
    <animated-header></animated-header>

    <main class="content">
      <section class="banner">
        <img src="./assets/virus.png" alt="virus logo" />
        <h1>covid-19</h1>
        <h4>overview of Coronavirus status in Morocco.</h4>
      </section>

      <hr />

      <section class="status">
        <div class="left">
          <h2>Overall</h2>
          <div>
            <h6>Recovered</h6>
            <h3>{{recoverd}}</h3>
          </div>
          <div>
            <h6>Deaths</h6>
            <h3>{{deaths}}</h3>
          </div>
        </div>
        <div class="center">
          <h5>Total cases</h5>
          <h1>{{cases}}</h1>
        </div>
        <div class="right">
          <h2>Today</h2>
          <div>
            <h6>Cases</h6>
            <h3>{{todayCases}}</h3>
          </div>
          <div>
            <h6>Deaths</h6>
            <h3>{{todayDeaths}}</h3>
          </div>
        </div>
      </section>

      <hr />

      <section class="graphs">
        <graphs></graphs>
      </section>
      <hr />

      <section class="links">
        check
        <a href="https://who.int/" target="_blank">World Health Organization</a>
        or
        <a
          href="https://www.sante.gov.ma/Pages/Accueil.aspx"
          target="_blank"
        >Ministry of Health (Morocco)</a>
      </section>
    </main>

    <footer>
      made with
      <b>music</b> and
      <b>coffee</b> by
      <a href="https://github.com/ablil">Github</a>,
      <a href="http://twitter.com/_ablil">Twitter</a>
    </footer>
  </div>
</template>

<script>
import AnimatedHeader from "./components/AnimatedHeader.vue";
import Graphs from "./components/Graphs";

export default {
  name: "App",
  components: {
    AnimatedHeader,
    Graphs,
  },
  data() {
    return {
      casesData: null,
      deathsData: null,

      deaths: -1,
      cases: -1,
      recoverd: -1,
      todayCases: -1,
      todayDeaths: -1,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const casesUrl =
        "https://api.covid19api.com/country/morocco/status/confirmed/live";
      const deathsUrl =
        "https://api.covid19api.com/country/morocco/status/deaths/live";

      const recoveredUrl =
        "https://api.covid19api.com/country/morocco/status/recovered/live";

      fetch(deathsUrl)
        .then((data) => data.json())
        .then((json) => {
          const n = json.length;

          this.deaths = json[n - 1].Cases;
          this.todayDeaths = this.deaths - json[n - 2].Cases;
          console.info("Today deaths ", this.todayDeaths);
        })
        .catch((err) => console.error(err));

      fetch(casesUrl)
        .then((data) => data.json())
        .then((json) => {
          const n = json.length;

          this.cases = json[n - 1].Cases;
          this.todayCases = this.cases - json[n - 2].Cases;
          console.info("Today cases ", this.todayCases);
        })
        .catch((err) => console.error(err));

      fetch(recoveredUrl)
        .then((data) => data.json())
        .then((json) => {
          const n = json.length;

          this.recoverd = json[n - 1].Cases;
          console.info("total recovered: ", this.recoverd);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

hr {
  width: 50%;
  height: 2px;
  color: #d0d0d0;
  margin: 5rem auto;
}

main.content {
  $red: #d13239;

  position: relative;
  top: -10rem;

  width: 70%;
  margin: auto;
  padding: 3rem;

  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  animation: slide-diag;
  animation-duration: 2s;

  section.banner {
    margin: auto auto 4rem;
    img {
      width: 15rem;
      height: auto;

      display: block;
      margin: auto;

      animation-name: rotation;
      animation-iteration-count: infinite;
      animation-duration: 10s;

      &:hover {
        opacity: 0.5;
      }
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }

      25% {
        transform: rotate(120deg);
      }

      75% {
        transform: rotate(240deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }

    h1 {
      text-align: center;
      text-transform: uppercase;
      color: #d13239;

      &::after {
        text-transform: capitalize;
        content: "in morocco";
        font-size: 1rem;
        padding-left: 1rem;
      }
    }
    h4 {
      text-align: center;
      margin: 1rem auto;
    }
  }

  section.status {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    // TODO: flex wrap

    text-align: center;

    margin: 4rem auto;

    .left div,
    .right div {
      margin: 2rem auto;
    }

    .left h2,
    .right h2,
    .center h5 {
      color: $red;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
  }

  @keyframes slide-diag {
    from {
      opacity: 0;
      transform: rotate(20deg);
    }
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
}

footer {
  margin-bottom: 2rem;
}
</style>
