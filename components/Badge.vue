<template>
  <span class="badge text-bg-dark border text-dark-emphasis fw-normal d-flex align-items-center gap-2 bg-transparent bg-blur-4 border-light border-opacity-25"
    style="min-height: 32px;">
    <span class="fw-bold" v-if="label">{{ label }}</span>
    <MaterialIcon v-if="name" :size="24" :name="name" />
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';

defineProps<{
  name?: string;
  label?: string;
}>();
</script>

<style lang="scss" scoped>

</style>