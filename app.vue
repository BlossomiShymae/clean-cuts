<template>
  <NuxtLayout>
    <NuxtPage keepalive />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: "Clean Cuts",
  ogTitle: "Clean Cuts",
  ogDescription: "Making game data viewable in a human-friendly format.",
  ogImage: "https://blossomishymae.github.io/clean-cuts/favicon.png",
  themeColor: "#000000",
});
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
