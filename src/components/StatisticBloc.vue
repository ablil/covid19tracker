<template>
    <div class="row mt-5">
        <div class="col-md-2 mx-auto bg-light shadow">
            <h4 class="text-info">Total Cases</h4>
            <h1 class="text-dark">{{globalStat.cases}}</h1>
        </div>
        <div class="col-md-2 mx-auto bg-light shadow">
            <h4 class="text-danger">deaths</h4>
            <h1 class="text-dark">{{globalStat.deaths}}</h1>
        </div>
        <div class="col-md-2 mx-auto bg-light shadow">
            <h4 class="text-success">recovered</h4>
            <h1 class="text-dark">{{globalStat.recovered}}</h1>
        </div>
        <div class="col-md-2 mx-auto bg-light shadow">
            <h4 class="text-info">Cases</h4>
            <span class="badge badge-pill badge-warning">Today</span>
            <h1 class="text-dark">{{todayStat.cases}}</h1>
        </div>
        <div class="col-md-2 mx-auto bg-light shadow">
            <h4 class="text-danger">Deaths</h4>
            <span class="badge badge-pill badge-warning">Today</span>
            <h1 class="text-dark">{{todayStat.deaths}}</h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: "statistic-bloc",
        data() {
            return {
                globalStat: {
                    cases: 0,
                    deaths: 0,
                    recovered: 0
                },
                todayStat: {
                    deaths: 0,
                    cases: 0
                }
            }
        },
        created() {
            this.getStat()
        },
        methods: {
            async getStat() {
                let json = await axios.get('https://thevirustracker.com/free-api?countryTotal=MA')
                const countryData = json.data.countrydata[0]

                this.globalStat.cases = countryData['total_cases']
                this.globalStat.deaths = countryData['total_deaths']
                this.globalStat.recovered = countryData['total_recovered']

                this.todayStat.deaths = countryData['total_new_deaths_today']
                this.todayStat.cases = countryData['total_new_cases_today']
            }
        }
    }
</script>