<template>
    <div class="container-fluid bg-light shadow rounded p-5">
        <div class="row">
            <div class="col">
                <h3 class="text-center">Covid-19 OverView (Morocco)</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">

                <description></description>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <statisticBloc></statisticBloc>
            </div>
        </div>
        <div class="row my-4">
            <div class="col my-4">
                <chartcontainer></chartcontainer>
            </div>
        </div>
        <div class="row">
            <div class="col my-4">

                <regions></regions>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <customfooter></customfooter>
            </div>
        </div>

    </div>
</template>

<script>
    import statisticBloc from './StatisticBloc.vue'
    import regions from './Regions.vue'
    import description from './Description.vue'
    import chartcontainer from './ChartContainer.vue'
    import customfooter from './Footer.vue'

    export default {
        name: 'index',
        components: {
            statisticBloc,
            regions,
            description,
            chartcontainer,
            customfooter
        },
        data() {
            return {
                chartTitle: 'daily deaths'
            }
        }
    }

</script>