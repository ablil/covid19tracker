<template>
  <div class="graphs">

    <!-- cases per day -->
    <section>
      <h3 id="daily">New cases per day</h3>
      <column-chart :colors="colors" :data="cases"></column-chart>
    </section>

    <hr>

    <!-- overall cases -->
    <section>
      <h3 id="overall">Timeline of cases evolution</h3>
      <line-chart :colors="colors" :data="totalCases"></line-chart>
    </section>
  </div>
</template>

<script>
export default {
  name: "graphs",
  data() {
    return {
      casesApi:
        "https://api.covid19api.com/country/morocco/status/confirmed/live",

      cases: [],
      totalCases: [],

      colors: ["#b00", "#666"],
    };
  },
  created() {
    this.fetchCasesData();
  },
  methods: {
    fetchCasesData() {
      fetch(this.casesApi)
        .then((data) => data.json())
        .then((data) => {
          const n = data.length;
          const last15Days = data.slice(n - 30, n);
          const lastTwoMonthsData = data.slice(n -60, n);

          last15Days.reduce((acc, cur) => {
            const day = this.formatDate(cur.Date);
            const cases = cur.Cases - acc;
            this.cases.push([day, cases]);

            return cur.Cases;
          });


          lastTwoMonthsData.reduce((acc, cur) => {
            const day = this.formatDate(cur.Date);
            const cases = cur.Cases - acc;
            this.totalCases.push([day, cases]);

            return cur.Cases;
          })
        })
        .catch((err) => console.error(err));
    },

    formatDate(date) {
      return date.split("T")[0];
    },
  },
};
</script>

<style lang="scss">

.graphs {

  section {
    margin:  4rem auto;
  }

  h3 {
    color: #d13239;
    text-transform: initial;

    &#daily::after {
      content: " last 30 days";
      font-size: 1rem;
      color: black;
    }
    &#overall::after {
      content: " last two months";
      font-size: 1rem;
      color: black;
    }
  }
}

</style>