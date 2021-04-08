<template> 
    <slot v-if="$slots.title">
        <h1>
            {{ value }}
        </h1>
    </slot>
  
    <slot v-if="$slots.avatar">
        <div class="avatar">
            <img :src="value" alt="">
        </div>
    </slot>

    <slot v-if="$slots.subtitle">
        <h2>
            {{ value }}
        </h2>
    </slot>

    <slot v-if="$slots.text">
        <p>
            {{ value }}
        </p>
    </slot>
</template>


<script>
export default {
    props: ['value']
}
</script>