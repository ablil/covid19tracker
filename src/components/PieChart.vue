<template>
    <div class="border border-black rounded">
        <h4 class="chart-title text-secondary">{{chartTitle}}</h4>
        <column-chart class="chart" :colors="colors" :data="chartData"></column-chart>
    </div>
</template>


<script>
    export default {
        name: 'piechart',
        props: {
            chartData: Array,
            chartTitle: String,
            colors: Array
        }
    }
</script>

<style lang="scss">
    .chart-title {
        margin: 1rem auto !important;
        font-weight: bold;
    }
    .chart{
        margin: 1rem auto !important;
    }
</style>