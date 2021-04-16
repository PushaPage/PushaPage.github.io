<template>
  <div class="container">
    <app-alert
        v-if="alert"
        title="Внимание!"
        text="Это очень важное сообщение, будьте бдительны!"
        type="warning"
        closeable
        @close="alert = false"
    >

    </app-alert>
    <div class="card">
        <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
  </div>

  <app-block></app-block>
</template>

<script>
import AppAlert from './components/AppAlert'
import AppBlock from './components/AppBlock'
import alertMixin from './components/alertMixin';
export default {
    mixins: [alertMixin],
    components: {
        AppAlert,
        AppBlock
    }
}
</script>

