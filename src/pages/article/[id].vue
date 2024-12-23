<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
})

const route = useRoute();

console.log(route)
</script>

<template>
  <div class="article-page">article</div>
</template>

<style lang="scss" scoped></style>
