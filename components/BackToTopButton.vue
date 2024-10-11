<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <div>
    <NuxtLink class="btn app-background text-light" @click="scrollTop">
      <MaterialIcon name="arrow-up" :size="24"/> Back to top
    </NuxtLink>
  </div>
</template>