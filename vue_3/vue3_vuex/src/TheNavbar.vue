<template>
  <header class="navbar">
    <span>Vuex 
        <strong>  Счетчик {{counter}}</strong>
    </span>
    <button class="btn" @click="addFive">Добавить 5</button>
  </header>
</template>

<script>
 import { mapGetters, mapMutations } from 'vuex'
  export default {
        computed: {
           counter() {
               return this.$store.getters['count/counter']
           },
            // ...mapGetters('count', ['counter'])
        },
        methods: {
            ...mapMutations('count', ['add']),
            addFive() {
                this.add({value: 5})
                // this.$store.commit('add', {
                //     value: 5
                // })

                // Redux Style
                // this.$store.commit({
                //     type: 'add',
                //     value: 5
                // })
            }

            // или
            // ...mapMutations({
            //     addFive: 'add',
            // }),
            // add() {
            //     this.addFive({value: 5})
            // }
            
        }, 
  }
</script>
