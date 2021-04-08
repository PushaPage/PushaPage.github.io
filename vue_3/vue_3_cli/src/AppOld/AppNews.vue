
<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <app-button class="btn" @action="open">
            {{ isNewsOpen ? 'Закрыть': 'Открыть' }}
        </app-button>
        <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)">
            Отметить не прочитанной
        </app-button>
        <div v-if="isNewsOpen">
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut accusamus nihil omnis sunt eum soluta numquam quos provident, magnam ipsa suscipit voluptate deleniti incidunt dolor libero rem consequuntur iusto fugit!</p>
            <app-button v-if="!wasRead" color="primary" @action="mark" >Прочесть новость</app-button>

            <app-news-list></app-news-list>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton'
import AppNewsList from './AppNewsList'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        return value === true || value === false
      }
    },
    wasRead: Boolean
  },
  //   emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
    },
    unmark: null
    // 'open-news' (num) {
    //   if (num) {
    //     return true
    //   }
    //   console.warn('No data in open-news emit')
    //   return false
    // }
  },
  data () {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news', 42)
      }
    },
    mark () {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    }
    // unmark () {
    //   this.$emit('unmark', this.id)
    // }
  },
  components: {
    AppButton,
    AppNewsList
  }

}
</script>
