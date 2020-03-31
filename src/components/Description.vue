<template>
    <div>
        <h4>
            This is <b>Not The Official</b> of Corona Virus in Morocco.
        </h4>
        <h5>
            For More Information, check:
        </h5>
        <div class="links-bloc mt-5">
            <div class="box bg-light shadow rounded p-2">
                <a href="#" class="text-secondary">WHO (World Health Organization)</a>
            </div>
            <div class="box bg-light shadow rounded p-2">
                <a href="#" class="text-secondary">Ministry of Health</a>
            </div>
            <div class="box bg-light shadow rounded p-2">
                <a href="#" class="text-secondary">Covid-19 around the Globe</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'description'
    }
</script>

<style lang="scss">
    .links-bloc {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
</style>