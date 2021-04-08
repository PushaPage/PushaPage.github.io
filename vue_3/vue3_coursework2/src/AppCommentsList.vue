<template>
    <ul class="list">
        <li class="list-item" v-for="comment in comments" :key="comment.id">
          <div>
            <p><strong>{{ comment.email }}</strong></p>
            <small>{{ comment.text }}</small>
          </div>
        </li>
      </ul>
</template>

<script>
export default {
    props: ['comments']
}
</script>