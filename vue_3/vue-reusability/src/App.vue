<template>
  <div class="container">
      <div class="card">
          <h2>{{ $i18n('app.title') }}</h2>
          <h2></h2>
          <button class="btn" @click="$alert('Wow it is working!')">Alert</button>
          <button class="btn" @click="changeLang">{{ $i18n('app.changeBtn') }}</button>
          <button class="btn primary" @click="modal = true">{{ $i18n('app.changeBtnModal') }}</button>
      </div>
      <teleport to="body">
        <app-modal
            v-if="modal"
            @close="modal = false"
        ></app-modal>
      </teleport>
  </div>    
</template>

<script>
import AppModal from './components/AppModal'

export default {
    inject: ['changeI18n'],
    data() {
        return {
            language: 'ru',
            modal: false,
        }
    },
    methods: {
        changeLang() {
            this.language =  this.language === 'ru' ? 'en' : 'ru';
            this.changeI18n(this.language)
            this.$forceUpdate()
        }
    },
    components: {
        AppModal
    }
}
</script>

