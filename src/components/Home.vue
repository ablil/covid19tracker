<template>
    <div class="container">
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
        <div class="row">
            <div class="col">

                <regions></regions>
            </div>
        </div>
    </div>
</template>

<script>
    import statisticBloc from './StatisticBloc.vue'
    import regions from './Regions.vue'
    import description from './Description.vue'

    export default {
        name: 'index',
        components: {
            statisticBloc,
            regions,
            description
        }
    }

</script>