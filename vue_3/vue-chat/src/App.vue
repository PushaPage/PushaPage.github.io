<template>
  <div class="container h-100per">
      <div class="chat">
          <ToolbarLayout />
          <MainLayout />
      </div>
  </div>
</template>
<script>
import ToolbarLayout from './layout/ToolbarLayout'
import MainLayout from './layout/MainLayout'
export default {
    setup() {

    },
    components: {
        ToolbarLayout,
        MainLayout
    }
}
</script>

<style lang="scss">
    .icon-online--sm {
        width: .5em;
        height: 0.5em;
    }

    .text--lh-2_2x {
        line-height: 2.2em;
    }

    .counter--sm {
        min-width: 1.429em;
        height: 1.429em;
        padding-right: .3em;
        padding-left: .3em;

        & > span {
            font-size: .786em;
        }
    }
</style>
