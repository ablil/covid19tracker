<template>
    <div class="border border-black rounded">
        <h4 class="text-secondary">{{chartTitle}}</h4>
        <column-chart :colors="colors" :data="chartData"></column-chart>
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