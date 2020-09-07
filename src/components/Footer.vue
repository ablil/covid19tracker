<template>
    <div>
        <h5>made with <i class="fas fa-mug-hot"></i> and <i class="fas fa-headphones-alt"></i></h5>
        <div class="external-link">
            <ul>
                <li><a href="https://github.com/ablil/" target="_blank"><i class="fab fa-github fa-2x"></i></a></li>
                <li><a href="https://twitter.com/_ablil" target="_blank"><i class="fab fa-twitter fa-2x"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'custom-footer'
    }
</script>

<style>
    .external-link ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .external-link li {
        padding: 10px;
    }
</style>