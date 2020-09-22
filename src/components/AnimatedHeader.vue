<template>
    <header class="page-header">
      <div class="bar" v-for="i in bars" :key="i"></div>
    </header>
</template>

<script>
export default {
    name: 'animated-header',
    data() {
        return {
            bars: [...Array(100).keys()]
        }
    }
}
</script>

<style lang="scss">
header.page-header {
  $header-bg: #F5F5F5;
  $bar-bg: #cccfd5;
  $bar-bg-hover: #9c9d9e;

  width: 100%;
  height: 320px;

  background:$header-bg;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;

  div.bar {
    height: 50%;
    width: calc(100% / 200);
    background: $bar-bg;

    &:hover {
      background: $bar-bg-hover;
    }
  }

  div.bar:nth-child(3n) {
    height: 50%;
    animation-name: slide-top;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }

  div.bar:nth-child(3n+2) {
    height: 90%;
    animation-name: slide-bottom;
    animation-duration: 30s;
    animation-iteration-count: infinite;
  }

  div.bar:nth-child(3n+1) {
    height: 90%;
    animation-name: slide-middle;
    animation-duration: 30s;
    animation-iteration-count: infinite;
  }

}

@keyframes slide-top {
  0% {
    height: 50%;
  }
  50% {
    height: 75%;
  }
  100% {
    height: 50%;
  }
}

@keyframes slide-bottom {
  0% {
    height: 90%;
  }
  50% {
    height: 50%;
  }
  100% {
    height: 90%;
  }
}

@keyframes slide-middle {
  0% {
    height: 50%;
  }

  50% {
    height: 80%;
  }

  100% {
    height: 50%;
  }

}
</style>