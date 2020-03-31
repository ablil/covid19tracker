<template>
    <tr>
        <td>{{name}}</td>
        <td :class="{'bg-info': isMaxCases}">{{cases}}</td>
        <td :class="{'bg-danger': isMaxDeaths}">{{deaths}}</td>
        <td :class="{'bg-success': isMaxRecovered}">{{recovered}}</td>
    </tr>
</template>

<script>
    export default {
        name: 'region',
        props: {
            name: String,
            cases: Number,
            deaths: Number,
            recovered: Number,
            isMaxCases: Boolean,
            isMaxDeaths: Boolean,
            isMaxRecovered: Boolean
        }
    }
</script>