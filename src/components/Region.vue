<template>
    <tr>
        <td>{{name}}</td>
        <td>{{cases}}</td>
        <td>{{deaths}}</td>
        <td>{{recovered}}</td>
    </tr>
</template>

<script>
    export default {
        name: 'region',
        props: {
            name: String,
            cases: Number,
            deaths: Number,
            recovered: Number
        }
    }
</script>