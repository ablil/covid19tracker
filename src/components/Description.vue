<template>
    <div>
        <h4>
            This is <b>Not The Official</b> of Corona Virus in Morocco.
        </h4>
        <h5>
            For More Information, check:
        </h5>
        <div class="row mt-5">
            <div class="col-sm-4  bg-light shadow rounded p-2">
                <a href="https://who.int" target="_blank" class="text-secondary">WHO (World Health Organization)</a>
            </div>
            <div class="offset-sm-1 col-sm-3  bg-light shadow rounded p-2">
                <a href="https://www.sante.gov.ma/Pages/Accueil.aspx" target="_blank" class="text-secondary">Ministry of
                    Health</a>
            </div>
            <div class="offset-sm-1 col-sm-3  bg-light shadow rounded p-2">
                <a href="https://www.who.int/redirect-pages/page/novel-coronavirus-(covid-19)-situation-dashboard"
                    target="_blank" class="text-secondary">Covid-19 around the Globe</a>
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