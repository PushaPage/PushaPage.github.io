<template>
    <form class="card card-w30" @submit.prevent="submitHandler">
      <app-select
      :options="options" 
      :selected="selected"
      @select-change="selectChange"
      defaultValue="Выберите тип"
      :error="errors.selected"
      ></app-select>

      <app-text-area
       placeholder="Введите текст..."
       v-model:text="text"
       @inputText="inputText"
       :error="errors.text"
      >
      </app-text-area>

         <app-button 
          color="primary" 
          :disabled="disabled" 
          type="submit"
          >Добавить</app-button>
    </form>
</template>

<script>
    import AppSelect from './AppSelect'
    import AppTextArea from './AppTextArea'
    import AppButton from './AppButton'
    export default {
        emits: ['submit-handler'],
        data() {
            return {
                selected: '',
                options: [
                    {
                        id: 1,
                        value: 'title',
                        text: 'Заголовок'
                    },
                    {
                        id: 2,
                        value: 'subtitle',
                        text: 'Подзаголовок'
                    },
                    {
                        id: 3,
                        value: 'avatar',
                        text: 'Аватар'
                    },
                    {
                        id: 4,
                        value: 'text',
                        text: 'Текст'
                    }
                ],
                text: '',
                errors: {
                  selected: null,
                  text: null
                }
            }
        },
        methods: {
            inputText (value) {
                if (value.length === 0) {
                    this.errors.text = null;
                }
            },
            selectChange(value) {
                this.selected = value;
                this.errors.text = null;
                this.errors.selected = null;
            },
            imageIsValid (src) {
                const img = new Image();
                return new Promise((resolve, reject) => {
                    img.onload = () => {
                        resolve();
                    };
                    img.onerror = () => {
                        reject();
                    };
                    img.src = src;

                })
            },

            async formIsValid() {
                let isValid = true;

                if (this.selected === 'avatar' && this.text.length !== 0) {

                    await this.imageIsValid(this.text).then( () => {
                            isValid = true;
                            this.errors.text = null;
                        }).catch(()=>{
                            this.errors.text = "Некорректный формат изображения"
                            isValid = false;
                        })

                } else if (this.selected === '') {
                    this.errors.selected = "Выберите тип блока"
                    isValid = false;
                } else {
                    this.errors.selected = null;
                    this.errors.text = null;
                }

                return isValid;
            },
            async submitHandler() {
                const isValid = await this.formIsValid();
                if (isValid) {
                    this.$emit('submit-handler', {
                        select: this.selected,
                        value: this.text,
                    })
                    this.selected = '';
                    this.text = '';
                }
            },
        },
        computed: {
            disabled() {
                if (this.text.length >= 3) {
                    return false
                }
                return true
            }
        },
        components: {
            AppSelect,
            AppTextArea,
            AppButton
        }
    }
</script>

