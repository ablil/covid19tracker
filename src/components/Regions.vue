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
                const csv = await axios.get('https://raw.githubusercontent.com/aboullaite/Covid19-MA/master/stats/regions.csv')
                const regions = csv.data.split('\n').slice(1)
                regions.forEach(function (region) {
                    if (region.length != 0) {
                        region = region.split(',')
                        regionsStat.push({
                            name: region[0],
                            cases: parseInt(region[1]),
                            deaths: parseInt(region[3]),
                            recovered: parseInt(region[4])
                        })
                    }
                })
            }
        },
        created() {
            this.getRegionsStat()
        }
    }
</script>