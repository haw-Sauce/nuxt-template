<template>
  <div class="flex flex-col h-screen">
    <HawHeader />
    <div class="flex-1 pt-[60px]">
      <slot />
    </div>
    <HawFooter />
  </div>
</template>
