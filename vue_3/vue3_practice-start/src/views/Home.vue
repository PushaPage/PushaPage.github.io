<template>
  <app-loader v-if="loading" />
  <app-page title="Список заявок" v-else>
      <template #header>
          <button class="btn primary" @click="modal = true">
              Создать
          </button>
      </template>
      <request-filter v-model="filter"></request-filter>
      <request-table :requests="requests"></request-table>
      <teleport to='body'> 
          <app-modal title="Создать заявку" v-if="modal" @close="modal = false">
              <request-modal @created="modal = false"></request-modal>
          </app-modal>
      </teleport>
  </app-page>
</template>

<script>
import {ref, computed, onMounted, watch} from 'vue'
import AppPage from '../components/ui/AppPage.vue'
import AppLoader from '../components/ui/AppLoader.vue'
import RequestTable from '../components/request/RequestTable'
import RequestModal from '../components/request/RequestModal'
import RequestFilter from '../components/request/RequestFilter'
import AppModal from '../components/ui/AppModal'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const modal = ref(false)
        const loading = ref(false)
        const filter = ref({})

        watch(filter, val => {
            console.log(val)
            console.log(filter.value);
        })


        onMounted( async()=> {
            loading.value = true
            await store.dispatch('request/load')
            loading.value = false

        })

        const requests = computed(()=> store.getters['request/requests'].filter(request => {
            console.log(request);
            if (filter.value.name) {
                return request.fio.includes(filter.value.name)
            }
            return request
        }).filter(request => {
            if (filter.value.status) {
                return filter.value.status === request.status
            }
            return request
        }))
        return {modal, requests, loading, filter}

     
    },
  components: {
      AppPage,
      RequestTable,
      AppModal,
      AppLoader,
      RequestModal,
      RequestFilter
      
  }
}
</script>
