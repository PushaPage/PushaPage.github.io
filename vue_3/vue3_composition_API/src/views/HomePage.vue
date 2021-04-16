<template>
    <app-alert 
    v-if="alert" 
    title="Работаем с Composition" 
    type="danger"
    @close-alert="closeAlert"
    ></app-alert>
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <div class="form-control">
          <!-- <input type="text" ref="textInput"> -->
          <input type="text" v-model="firstName">
      </div>
      <button class="btn" @click="changeInfo">Изменить</button>
      <button class="btn danger" @click="toggleAlert">Alert</button>

    </div>

    <!-- <FrameworkInfo 
        :name="name" 
        :version="version"
        @change-version="changeVersion"
        class="test-from-app"
    >
        <template #footer>
            <p>
                This is footer
            </p>
        </template>
    </FrameworkInfo> -->

    <FrameworkInfo         
        @change-version="changeVersion"
        class="test-from-app"
    >
        <template #footer>
            <p>
                This is footer
            </p>
        </template>
    </FrameworkInfo>
</template>

<script>
import {
    ref, 
    reactive, 
    toRefs, 
    isRef, 
    isReactive, 
    computed,
    watch,
    provide,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue';
import FrameworkInfo from '../FrameworkInfo.vue';
import AppAlert from '../AppAlert'
import {useAlert} from '../use/alert'
export default {
    setup() {
        // const {alert, toggleAlert, closeAlert} = useAlert();
        const name = ref('VueJS');
        const version = ref(3);
        const textInput = ref(null);
        const firstName = ref('');

        console.log(isRef(name));
        console.log(isRef(version.value));

        // const framework = ref({
        //     name: 'VueJS',
        //     version: 3
        // })
        console.log('created');

        onBeforeMount(()=> {
            console.log('onBeforeMount');
        })
        onMounted(()=> {
            console.log('onMounted');
        })
        onBeforeUpdate(()=> {
            console.log('onBeforeUpdate');
        })
        onUpdated(()=> {
            console.log('onUpdated');
        })
        onBeforeUnmount(()=> {
            console.log('onBeforeUnmount');
        })
        onUnmounted(()=> {
            console.log('onUnmounted');
        })
        const framework = reactive({
            name: 'VueJS',
            version: 3
        })

        console.log(isReactive(framework));
        console.log(isReactive(framework.name));

        // const doubleVersion = computed( ()=> version.value * 2 )

        // console.log(isRef(doubleVersion));

        const changeInfo = () => {
            name.value = 'Vue JS!';
            version.value = 42;
            // console.log(textInput.value.value);

            // framework.value.name = 'Vue JS!';
            // framework.value.version = 4;

            // framework.name = 'Vue JS!';
            // framework.version = 4;
        }

        const changeVersion = (num) => {
            version.value = num;
        }

        watch(firstName, (newV, oldV)=> {
            console.log(newV);
        })

        provide('name', name)
        provide('version', version)

        // watch(doubleVersion, (newValue, oldValue)=> {
        //     console.log('newVersion', newValue);
        //     console.log('oldVersion', oldValue);
        // })


        // watch([doubleVersion, name], (newValue, oldValue)=> {
        //     console.log('newVersion', newValue[0]);
        //     console.log('oldVersion', oldValue[0]);
        //     console.log('newName', newValue[1]);
        //     console.log('oldName', oldValue[1]);
        // })

        return {
            // name,
            // version,
            // name: framework.value.name,
            // version: framework.value.version,
            // name: framework.name,
            // version: framework.version,
            // ...toRefs(framework),
            framework,
            changeInfo,
            // doubleVersion,
            textInput,
            firstName,
            changeVersion,
            ...useAlert(true)
        }

    },
    components: {
        FrameworkInfo,
        AppAlert
    }
//   data() {
//     return {
//       name: 'VueJS',
//       version: 3
//     }
//   },
//   methods: {
//     changeInfo() {
//       this.name = 'Vue JS!'
//       this.version = 4
//     }
//   }
}
</script>

<style lang="scss" scoped>

</style>