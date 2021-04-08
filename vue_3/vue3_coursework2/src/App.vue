<template>
  <div class="container column">

    <app-form @submit-handler="submit"></app-form>

    <div class="card card-w70">
      <div v-if="components.length">
          <component v-for="(component, i) in components" :is="'app-block'" :key="i" :value="component.value">
              <template #[component.name] ></template>
          </component>
      </div>
      <!-- <div class="avatar">
        <img src="https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png">
      </div>
      <h2>Опыт работы</h2>
      <p>
        главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь отвергает его существование), алкоголик, социопат, дедушка Морти. На момент начала третьего сезона ему 70 лет[1]. Рик боится пиратов, а его главной слабостью является некий - "Санчезиум". Исходя из того, что существует неограниченное количество вселенных, существует неограниченное количество Риков, герой сериала предположительно принадлежит к измерению С-137. В серии комикcов Рик относится к измерению C-132, а в игре «Pocket Mortys» — к измерению C-123[2]. Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад в будущее»[3].
      </p> -->
      <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
  <div class="container">
    <p>
        <app-button 
          color="primary"
          type="button"
          @action="loadComments"
          >Загрузить комментарии</app-button>
    </p>

    <app-loader v-if="loading"></app-loader>
    
    <div class="card" v-else-if="loadingEnd">
      <h2>Комментарии</h2>
      <app-comments-list v-if="comments.length" :comments="comments"
      ></app-comments-list>
      <h3 v-else>Ничего не найдено...</h3>
    </div>
  </div>
</template>

<script>
    import AppForm from './formComponents/AppForm'
    import AppButton from './formComponents/AppButton'
    import AppBlock from './AppBlock'
    import AppCommentsList from './AppCommentsList'
    import AppLoader from './AppLoader'
    export default {
        data() {
            return {
                components: [],
                comments: [],
                loading: false,
                loadingEnd: false,
            }
        },
        methods: {
            // NOTE: load comments
            loadComments() {
                this.loading = true;
                this.loadingEnd = false;
                const randomInteger = Math.floor(Math.random() * 51);
                console.log(randomInteger);

                setTimeout( async () => {
                    
                
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${randomInteger}`, {
                    method: 'GET',
                    header: {
                        'content-Type': 'application/json'
                    }
                })

                const data = await response.json()

                this.loading = false;
                this.loadingEnd = true;
                this.comments = Object.keys(data).map(key => {
                    return {
                        id: key,
                        name: data[key].name,
                        email: data[key].email,
                        text: data[key].body,
                    }
                });

                }, 1500);
            },
            
            // NOTE: submit form
            submit ({select, value}) {
                this.components.push({
                    name: select,
                    value,
                });
            }
        },
        computed: {

        },
        components: {
            AppForm,
            AppBlock,
            AppButton,
            AppCommentsList,
            AppLoader
        }
    }
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
