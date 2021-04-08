<template>
<div class="container pt-1">
    <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
        <span>Открыто: <strong>{{ openRate }}</strong> |
         Прочитано:
        <strong> {{ readRate }}</strong></span>
    </div>
    <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        :was-read="item.wasRead"
        @unmark="unReadNews"
        @open-news="openNews"
        @read-news="readNews"
    >
    </app-news>
</div>
</template>

<script>
import AppNews from './AppNews'
export default {
  data () {
    return {
      openRate: 0,
      readRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Джо Байден победил на выборах В США',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Vue 3 успешно работает',
          id: 2,
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },
  provide (){
    return {
      news: this.news
    }
  },
  methods: {
    openNews (data) {
      this.openRate++
      console.log(data)
    },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unReadNews (id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  //   name: 'App',
  components: {
    AppNews
  }
}
</script>

<style lang="scss" scoped>
    #app {

    color: #2c3e50;
    margin-top: 60px;
    }

    h2 {
        color: darkred;
    }

</style>
