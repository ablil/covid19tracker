<template>
    <div class="border border-black rounded">
        <h4 class="chart-title text-secondary">{{chartTitle}}</h4>
        <!-- <line-chart :data="chartData"></line-chart> -->
        <line-chart class="chart" :colors="colors"  :data="chartData"></line-chart>
    </div>
</template>

<script>
    export default {
        name: 'linechart',
        props: {    
            chartTitle: String,
            chartData: Object,
            colors: Array
        }
    }
</script>

<style lang="scss">
    .chart-title {
        margin: 1rem auto !important;
        font-weight: bolder;
    }
    .chart{
        margin: 1rem auto !important;
    }
</style>