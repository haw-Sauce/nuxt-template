<script setup lang="ts">
definePageMeta({
  title: "home"
});
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>

<template>
  <div
    class="h-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 m-auto bg-[#67c1eb]"
  >
    <div class="h-[300px] bg-[skyblue]">
      <UButton @click="counter--">-</UButton>{{ counter }}
      <UButton @click="counter++">+</UButton>
    </div>
    <div class="h-[300px] bg-[skyblue]">1</div>
    <div class="h-[300px] bg-[skyblue]">1</div>
  </div>
</template>

<style lang="scss" scoped></style>
