<template>
    <div>
        <div class="row mt-5">
            <div class="col">
                <h2>Graphical Overview</h2>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6">
                <linechart :chartTitle="'Total Cases'" :chartData='{...totalCases}'></linechart>
            </div>
            <div class="col-md-6">
                <piechart :chartTitle="'New Cases / day'" :chartData='dailyCases'></piechart>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6">
                <linechart :colors="['#b00', '#666']" :chartTitle="'Total Deaths'" :chartData='{...totalDeaths}'></linechart>
            </div>
            <div class="col-md-6">
                <piechart :colors="['#b00', '#666']" :chartTitle="'New Deaths / day'" :chartData='dailyDeaths'></piechart>

            </div>
        </div>
    </div>
</template>

<script>
    import piechart from './PieChart.vue'
    import linechart from './LineChart.vue'

    export default {
        name: 'piecontainer',
        components: {
            piechart,
            linechart
        },
        data() {
            return {
                totalDeaths: {},
                dailyDeaths: [],
                totalCases: {},
                dailyCases: []
            }
        },
        methods: {
            async getChartsData() {
                const data = await axios.get('https://thevirustracker.com/free-api?countryTimeline=MA')
                const days  = data.data.timelineitems[0];
                for (const day in days ){
                    if ( day.match('stat'))
                        continue
                    const reformatedDay = this.reformatDate(day)
                    this.totalCases[reformatedDay] = parseInt(days[day]['total_cases'])
                    this.totalDeaths[reformatedDay] = parseInt(days[day]['total_deaths'])
                    this.dailyCases.push([day.slice(0,4), parseInt(days[day]['new_daily_cases'])])
                    this.dailyDeaths.push([day.slice(0,4), parseInt(days[day]['new_daily_deaths'])])
                }
            },
            reformatDate(date){
                const splited = date.split('/')
                return '2020-0' + splited[0] + '-' + splited[1]
            },
            async getCasesData() {
                let json = await axios.get('https://api.covid19api.com/country/morocco/status/confirmed/live');
                json = json.data;
                for (let i = json.length - 30; i < json.length; i++){
                    let day = json[i].Date.split('T')[0]
                    this.totalCases[day] = parseInt(json[i].Cases)
                    if  (i != 0){
                        this.dailyCases.push([
                            day,
                            json[i].Cases - json[i-1].Cases
                        ])
                    }
                }
            },
            async getDeathsData() {
                let json = await axios.get('https://api.covid19api.com/country/morocco/status/deaths/live');
                json = json.data;

                for (let i = json.length - 30; i < json.length; i++){
                    const day = json[i].Date.split('T')[0]
                    this.totalDeaths[day] = parseInt(json[i].Cases)
                    if ( i != 0 ){
                        this.dailyDeaths.push([
                            day,
                            json[i].Cases - json[i-1].Cases
                        ])
                    }
                }
            }
        },
        created() {
            // this.getChartsData()
            this.getCasesData()
            this.getDeathsData()
        }
    }
</script>