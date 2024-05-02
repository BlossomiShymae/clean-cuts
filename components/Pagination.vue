<template>
  <div class="btn-group">
    <NuxtLink :class="`btn btn-outline-dark ${hasFurtherPreviousCss}`">
      <MaterialIcon name="chevron-double-left" :size="32" />
    </NuxtLink>
    <NuxtLink :class="`btn btn-outline-dark ${hasPreviousCss}`">
      <MaterialIcon name="chevron-left" :size="32" />
    </NuxtLink>
    <NuxtLink :class="`btn btn-outline-dark text-light`">
      {{ pageIndex / totalPages }}
    </NuxtLink>
    <NuxtLink :class="`btn btn-outline-dark ${hasNextCss}`">
      <MaterialIcon name="chevron-right" :size="32" />
    </NuxtLink>
    <NuxtLink :class="`btn btn-outline-dark ${hasFurtherNextCss}`">
      <MaterialIcon name="chevron-double-right" :size="32" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';

const props = defineProps<{
  hasPrevious: boolean;
  hasFurtherPrevious: boolean;
  hasNext: boolean;
  hasFurtherNext: boolean;
  pageIndex: number;
  totalPages: number;
}>();

const hasPreviousCss = !props.hasPrevious ? "disabled" : "";
const hasFurtherPreviousCss = !props.hasFurtherPrevious ? "disabled" : "";
const hasNextCss = !props.hasNext ? "disabled" : "";
const hasFurtherNextCss = !props.hasFurtherNext ? "disabled" : "";
</script>

<style lang="scss" scoped>

</style>