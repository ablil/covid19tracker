<template>
    <div class="mt-5">

        <h2>Stats By Regions</h2>
        <table class="table table-bordered rounded table-hover table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Region</th>
                    <th>Cases</th>
                    <th>Death</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                <region v-for='region in regionsStat' v-bind='region' :key='region.name'></region>
            </tbody>
        </table>
    </div>
</template>

<script>
    import region from './Region.vue'
    export default {
        name: 'regions',
        components: {
            region
        },
        data() {
            return {
                regionsStat: []
            }
        },
        methods: {
            async getRegionsStat() {
                let regionsStat = this.regionsStat;
                let maxCasesIndex = 0;
                let maxRecoverdIndex = 0;
                let maxDeathsIndex = 0;
                const csv = await axios.get('https://raw.githubusercontent.com/aboullaite/Covid19-MA/master/stats/regions.csv')
                const regions = csv.data.split('\n').slice(1)
                for (let i = 0; i < regions.length - 2; i++) {
                    let regionObj = this.createRegionObject(regions[i].split(','))
                    this.regionsStat.push(regionObj)
                }
                this.styleMaxValues()
            },
            createRegionObject(region) {
                return {
                    name: region[0],
                    cases: parseInt(region[1]),
                    deaths: parseInt(region[3]),
                    recovered: parseInt(region[4]),
                    isMaxCases: false,
                    isMaxRecovered: false,
                    isMaxDeaths: false
                }
            },
            styleMaxValues(){
                let maxCasesIndex = 0;
                let maxRecoveredIndex = 0;
                let maxDeathsIndex = 0;
                for (let i = 1; i < this.regionsStat.length; i++ ){
                    if ( this.regionsStat[i].cases > this.regionsStat[maxCasesIndex].cases){
                        this.regionsStat[i].isMaxCases = true;
                        this.regionsStat[maxCasesIndex].isMaxCases = false;
                        maxCasesIndex = i;
                    }
                    if (this.regionsStat[i].deaths > this.regionsStat[maxDeathsIndex].deaths) {
                        this.regionsStat[i].isMaxDeaths = true;
                        this.regionsStat[maxDeathsIndex].isMaxDeaths = false;
                        maxDeathsIndex = i;
                    }
                    if (this.regionsStat[i].recovered > this.regionsStat[maxRecoveredIndex].recovered) {
                        this.regionsStat[i].isMaxRecovered = true;
                        this.regionsStat[maxRecoveredIndex].isMaxRecovered = false;
                        maxRecoveredIndex = i;
                    }
                }
            }
        },
        created() {
            this.getRegionsStat()
        }
    }
</script>