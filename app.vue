<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage keepalive />
  </NuxtLayout>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.125rem);
}

.layout-enter-active,
.layout-leave-active {
  transform: none;
  transition: all 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  transform: translateX(-100%);
}
</style>
