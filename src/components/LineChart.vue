<template>
    <div class="border border-black rounded">
        <h4 class="text-secondary">{{chartTitle}}</h4>
        <!-- <line-chart :data="chartData"></line-chart> -->
        <line-chart :colors="colors"  :data="chartData"></line-chart>
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