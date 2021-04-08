<template>
<div class="container pt-1">
    <div class="card">
        <h2>Slots</h2>
    </div>
    <app-list>
        <template #default="{ idx, iter}">
            <span style="color: #c25205;">
                <strong>{{ idx + 1}}</strong>
                item: {{ iter }}
            </span>
        </template>
    </app-list>
    <app-block>
        <p>Важный текст для нового блока</p>
        <template #header>
            <h3>
                Это заголовок:
            </h3>
        </template>
        <template v-slot:footer>
            <hr />
            <small>
                Это футер
            </small>
        </template>
    </app-block>
</div>
</template>

<script>
import AppBlock from './AppBlock'
import AppList from './AppList'
export default {
  components: { AppBlock, AppList }
}
</script>

<style lang="scss" scoped>
    #app {

    color: #2c3e50;
    margin-top: 60px;
    }

</style>
