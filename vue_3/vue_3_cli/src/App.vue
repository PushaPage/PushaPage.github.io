<template>
<div class="container pt-1">
    <div class="card">
        <async-component></async-component>
        <h2>Динамические и асинхронные компоненты</h2>
        <app-button
        :color="oneColor"
        @action="active='one'">One</app-button>

        <app-button
        :color="twoColor"
        @action="active='two'">Two</app-button>
    </div>

    <keep-alive>
       <component :is="componentName"></component>
    </keep-alive>

</div>
</template>

<script>
import AppButton from "./AppButton"
import AppTextOne from './AppTextOne'
import AppTextTwo from './AppTextTwo'
export default {
  data () {
    return {
      active: 'one'
    }
  },
  computed: {
    componentName () {
      return 'app-text-' + this.active
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },

    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: { AppButton, AppTextOne, AppTextTwo }

}
</script>

<style lang="scss" scoped>
    #app {

    color: #2c3e50;
    margin-top: 60px;
    }

</style>
