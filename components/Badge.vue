<template>
  <span class="badge text-bg-dark border text-dark-emphasis fw-normal d-flex align-items-center gap-2 bg-transparent bg-blur-4 border-light border-opacity-25">
    <MaterialIcon :size="24" :name="name" />
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';

defineProps<{
  name: string
}>();
</script>

<style lang="scss" scoped>

</style>