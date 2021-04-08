<template>
    <div class="card">
        <ul>
            <li v-for="(item, i) in 5" :key="item">
                <slot :iter="item" :idx="i"></slot>
            </li>
        </ul>
    </div>
</template>
